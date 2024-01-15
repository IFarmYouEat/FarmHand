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
                <p>Contract Modal</p>
            </div>
           
        </div>
    );
};

export default ContractModal;