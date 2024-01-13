import React from "react";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./Modal.css";

function Modal({ closeModal, defaultValue }) {

    const dispatch = useDispatch();

    // Pulls the current year for the form to use as a default value
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    // If no value passed in through prop defaultValue
    // useState will set initial values
    let [yearlyYield, setYearlyYield] = useState(defaultValue || { year: currentYear, crop: '', yield: 0, source: '' });

    // Change handler for values in form
    const handleChangeFor = (key, value) => {
        setYearlyYield({ ...yearlyYield, [key]: value })
    };

    // Submit handler will submit a new value if defaultValue is null
    // or update current values if a value is passed in.
    const handleSubmit = (event) => {
        event.preventDefault();
        if (defaultValue === null) {
            dispatch({ type: 'SEND_YIELD_TO_SERVER', payload: yearlyYield });
            console.log("Sent New Yield to Server:", yearlyYield);
        } else {
            dispatch({ type: 'UPDATE_YIELD', payload: yearlyYield });
            console.log("Updated yield fields:", yearlyYield);
        }
        setYearlyYield({ year: currentYear, crop: '', yield: 0, source: '' });
        closeModal();
    };

    return (
        <div className="modal-container" onClick={(e) => {
            if (e.target.className === "modal-container") closeModal()
        }}>
            <div className="modal">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="year">Year:</label>
                        <input
                            name="year"
                            type="number"
                            value={yearlyYield.year}
                            onChange={(event) => handleChangeFor('year', event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="crop">Select Crop:</label>
                        <select name="crop" onChange={(event) => handleChangeFor('crop', event.target.value)} value={yearlyYield.crop}>
                            <option value="">No Selection</option>
                            <option value="Corn">Corn</option>
                            <option value="Soybeans">Soybeans</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="yield">Yield:</label>
                        <input
                            type="number"
                            value={yearlyYield.yield}
                            onChange={(event) => handleChangeFor('yield', event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="source">Source:</label>
                        <select name="source" onChange={(event) => handleChangeFor('source', event.target.value)} value={yearlyYield.source}>
                            <option value="">No Selection</option>
                            <option value="Projected">Projected</option>
                            <option value="Monitor">Monitor</option>
                            <option value="Actual">Actual</option>
                        </select>
                    </div>
                    <button type='submit' className="btn">Submit</button>

                </form>
            </div>

        </div>
    )
}

export default Modal;