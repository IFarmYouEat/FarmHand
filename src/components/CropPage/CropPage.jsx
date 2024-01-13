import React from 'react';
import {useState} from 'react';
import CropTable from '../CropTable/CropTable';
import Modal from '../Modal/Modal'

import './CropPage.css';

function CropPage() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="CropPage">
            <h1>Yearly Crop Yield</h1>
            <CropTable />
            <button className="btn" onClick={() => setModalOpen(true)}>Add New Yield</button>
            {modalOpen && <Modal closeModal={() => {setModalOpen(false)}}/>}

        </div>
    )
}

export default CropPage;