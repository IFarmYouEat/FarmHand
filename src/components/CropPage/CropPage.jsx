import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CropPage() {

    const dispatch = useDispatch();
    const yields = useSelector(store => store.crop);
    const user = useSelector(store => store.user);
    

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    let [newYield, setYield] = useState({ user_id: user.id, year: currentYear, crop: '', yield: 0 });

    const handleChangeFor = (key, value) => {
        setYield({ ...newYield, [key]: value })
    };

    const addNewYield = event => {
        event.preventDefault();
        dispatch({ type: 'SEND_YIELD_TO_SERVER', payload: newYield });
        console.log("Sent New Yield to Server:", newYield);
        setYield({ user_id: user.id, year: currentYear, crop: '', yield: 0 });
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_YIELDS' });
    }, []);

    return (
        <div>
            <div>
                <form onSubmit={addNewYield}>
                    Year:
                    <input
                        type="number"
                        value={newYield.year}
                        onChange={(event) => handleChangeFor('year', event.target.value)}
                    />
                    <fieldset onChange={(event) => handleChangeFor('crop', event.target.value)}>
                        <legend>Select Crop</legend>
                        <div>
                            <label>Corn</label>
                            <input
                                type="radio"
                                value="Corn"
                                id="Corn"
                                name="crop"
                            />
                        </div>
                        <div>
                            <label>Soybeans</label>
                            <input
                                type="radio"
                                value="Soybeans"
                                id="Soybeans"
                                name="crop"
                            />
                        </div>
                    </fieldset>
                    Yield:
                    <input
                        type="number"
                        value={newYield.yield}
                        onChange={(event) => handleChangeFor('yield', event.target.value)}
                    />
                    <input type='submit' value='Add New Yield' />
                </form>

            </div>
            <div className="container" >
                <table>
                    <thead>
                        <td>ID</td>
                        <td>User</td>
                        <td>Year</td>
                        <td>Crop</td>
                        <td>Total Yield</td>
                    </thead>
                    <tbody>
                        {yields.map(entry => {
                            return (
                                <tr>
                                    <td>{entry.id}</td>
                                    <td>{entry.user_id}</td>
                                    <td>{entry.year}</td>
                                    <td>{entry.crop}</td>
                                    <td>{entry.yield}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CropPage;