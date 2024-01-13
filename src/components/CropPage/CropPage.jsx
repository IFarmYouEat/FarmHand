import React from 'react';
import {useState} from 'react';
import CropTable from '../CropTable/CropTable';
import Modal from '../Modal/Modal'

import './CropPage.css';

function CropPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [rowToEdit, setRowToEdit] = useState(null);
    
    const handleEditRow = (index) => {
        setRowToEdit(index);

        setModalOpen(true);
    } 


    return (
        <div className="CropPage">
            <h1>Yearly Crop Yield</h1>
            <button className="btn" onClick={() => setModalOpen(true)}>Add New Yield</button>
            {modalOpen && <Modal closeModal={() => {setModalOpen(false), setRowToEdit(null)}} defaultValue={rowToEdit}/>}
            <CropTable editRow={handleEditRow}/>
            

        </div>
    )
}

export default CropPage;