import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CropPage.css';
import CropForm from '../CropForm/CropForm';
import CropTable from '../CropTable/CropTable';
import Modal from '../Modal/Modal'

function CropPage() {

    return (
        <div className="container">
            <h1>Yearly Crop Yield</h1>
            <CropForm />
            <CropTable />
            <Modal />

        </div>
    )
}

export default CropPage;