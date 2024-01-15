import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './ContractModal.css';

function ContractModal ({ closeModal, defaultValue }) {

    const dispatch = useDispatch();

    return(
        <div>
            <p>Contract Modal</p>
        </div>
    );
};

export default ContractModal;