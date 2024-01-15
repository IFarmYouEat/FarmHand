import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './ContractModal.css';

function ContractModal ({ closeModal, defaultValue }) {

    const dispatch = useDispatch();

    let [contract, setContract] = useState(defaultValue || {contract_id: "", contracted_amt: 0, price: 0, location_name: "", crop: "", delevery_month: "", status: ""});

    const handleChangeFor = (key, value) => {
        setContract({ ...contract, [key]: value })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (defaultValue === null) {
            dispatch({ type: 'SEND_CONTRACT_TO_SERVER', payload: contract });
        } else {
            dispatch({ type: 'UPDATE_CONTRACT', payload: contract });
        }
        setContract({contract_id: "", contracted_amt: 0, price: 0, location_name: "", crop: "", delevery_month: "", status: ""});
        closeModal();
    }

    return(
        <div className="modal-container" onClick={(e) => {
            if(e.target.className === "modal-container") closeModal()
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
                        <label htmlFor="crop">Select Crop:</label>
                        <select name="crop" onChange={(event) => handleChangeFor('crop', event.target.value)} value={contract.crop}>
                            <option value="">No Selection</option>
                            <option value="Corn">Corn</option>
                            <option value="Soybeans">Soybeans</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="contracted_amt">Contracted Amount:</label>
                        <input
                            type="number"
                            value={contract.contracted_amt}
                            onChange={(event) => handleChangeFor('contracted_amt', event.target.value)}
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