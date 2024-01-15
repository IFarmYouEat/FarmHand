import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './ContractModal.css';

function ContractModal({ closeModal, defaultValue }) {

    const dispatch = useDispatch();

    let [contract, setContract] = useState(defaultValue || {contract_id: "", location: "", amount: 0, price: 0, month: "", status: "" });

    const handleChangeFor = (key, value) => {
        setContract({ ...contract, [key]: value })
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(defaultValue === null) {
        console.log(contract)
        dispatch({ type:'SEND_CONTRACT', payload: contract });
        console.log("Contract sent to Server.", contract);
        } else {
            dispatch({ type:'UPDATE_CONTRACT', payload: contract });
            console.log("Updated contract.", contract)
        }
        setContract({ contract_id: "", location: "", amount: 0, price: 0, month: "", status: "" });
        closeModal();
    }

    return (
        <div className="modal-container" onClick={(e) => {
            if (e.target.className === "modal-container") closeModal()
        }}>
            <div className="modal">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="contract_id">Contract ID:</label>
                        <input
                            name="contract_id"
                            type="text"
                            value={contract.contract_id}
                            onChange={(event) => handleChangeFor('contract_id', event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location:</label>
                        <input
                            name="location"
                            type="text"
                            value={contract.location}
                            onChange={(event) => handleChangeFor('location', event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="month">Delivery Month:</label>
                        <select name="month" onChange={(event) => handleChangeFor('month', event.target.value)} value={contract.month}>
                            <option value="">No Selection</option>
                            <option value="January">January</option>
                            <option value="Feburary">Feburary</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">Contracted Amount:</label>
                        <input
                            type="number"
                            value={contract.amount}
                            onChange={(event) => handleChangeFor('amount', event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            value={contract.price}
                            onChange={(event) => handleChangeFor('price', event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Source:</label>
                        <select name="status" onChange={(event) => handleChangeFor('status', event.target.value)} value={contract.status}>
                            <option value="">No Selection</option>
                            <option value="Open">Open</option>
                            <option value="Complete">Complete</option>
                        </select>
                    </div>
                    <button type='submit' className="btn">Submit</button>

                </form>
            </div>

        </div>
    );
};

export default ContractModal;