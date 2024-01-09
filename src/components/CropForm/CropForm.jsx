import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function CropForm() {

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    
    const dispatch = useDispatch();
    
    let [newYield, setYield] = useState({year: currentYear, crop: '', yield: 0 });
    
    const handleChangeFor = (key, value) => {
        setYield({ ...newYield, [key]: value })
    };
    
    const addNewYield = event => {
        event.preventDefault();
        dispatch({ type: 'SEND_YIELD_TO_SERVER', payload: newYield });
        console.log("Sent New Yield to Server:", newYield);
        setYield({year: currentYear, crop: '', yield: 0 });
    };

    return (
        <div>
            <p>Hello you absolute legend</p>
            <form onSubmit={addNewYield} className="container">
                Year:
                <input
                    type="number"
                    value={newYield.year}
                    onChange={(event) => handleChangeFor('year', event.target.value)}
                />
                <fieldset onChange={(event) => handleChangeFor('crop', event.target.value)}>
                    <legend>Select Crop</legend>

                    <label>Corn</label>
                    <input
                        type="radio"
                        value="Corn"
                        id="Corn"
                        name="crop"
                    />
                    <label>Soybeans</label>
                    <input
                        type="radio"
                        value="Soybeans"
                        id="Soybeans"
                        name="crop"
                    />
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

    )
}

export default CropForm;