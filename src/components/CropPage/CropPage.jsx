import React from 'react';
import { useState } from 'react';
import CropTable from '../CropTable/CropTable';
import Modal from '../Modal/Modal';

import './CropPage.css';

function CropPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [rowToEdit, setRowToEdit] = useState(null);

    // Passes rows values to be edited into Modal and opens Modal.
    const handleEditRow = (index) => {
        setRowToEdit(index);
        setModalOpen(true);
    };

    return (
        <div className="CropPage">
            <h1>Yearly Crop Yield</h1>
            <button className="btn" onClick={() => setModalOpen(true)}>Add New Yield</button>
            {/* makes the modal closed by default, changing modalOpen to true will open modal */}
            {modalOpen && <Modal closeModal={() => { setModalOpen(false), setRowToEdit(null) }} defaultValue={rowToEdit} />}

            {/* passes handleEditRow in as a prop to retrieve values for Modal */}
            <CropTable editRow={handleEditRow} />


        </div>
    )
}

export default CropPage;