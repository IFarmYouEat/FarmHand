import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CropForm from '../CropForm/CropForm';

function CropPage() {

    const dispatch = useDispatch();
    const yields = useSelector(store => store.crop);   

    const removeYield = (id) => {
        dispatch({ type: 'REMOVE_YIELD', payload: id });
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_YIELDS' });
    }, []);

    return (
        <div>
            <CropForm />
            

            <div className="container" >
                <table>
                    <thead>
                        <tr>
                            <td>Year</td>
                            <td>Crop</td>
                            <td>Total Yield</td>
                        </tr>
                    </thead>
                    <tbody>
                        {yields.map(entry => {
                            return (
                                <tr key={entry.id}>
                                    <td>{entry.year}</td>
                                    <td>{entry.crop}</td>
                                    <td>{entry.yield}</td>
                                    <td>{<button onClick={() => removeYield(entry.id)}>Delete</button>}</td>
                                    <td>{<button onClick={() => updateYield(entry)}>Edit</button>}</td>
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