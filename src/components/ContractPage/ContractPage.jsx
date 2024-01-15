import React, { useState } from 'react';
import ContractTable from '../ContractTable/ContractTable';
import ContractModal from '../ContractModal/ContractModal';
import './ContractPage.css';

function ContractPage() {

    const [modalOpen, setModalOpen] = useState(false);
    const [rowToEdit, setRowToEdit] = useState(null);

    const handleEditRow = (index) => {
        setRowToEdit(index);
        setModalOpen(true);
    };

    return(
        <div className="ContractPage">
            <h1>Contracts</h1>
        <button className="btn" onClick={() => setModalOpen(true)} >Add New Contract</button>
        {modalOpen && <ContractModal closeModal={() => { setModalOpen(false), setRowToEdit(null) }} defaultValue={rowToEdit} />}
        <ContractTable editRow={handleEditRow} />
        
        </div>
        
    )
}

export default ContractPage;