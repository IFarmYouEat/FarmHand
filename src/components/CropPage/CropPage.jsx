import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CropPage.css';
import CropForm from '../CropForm/CropForm';
import CropTable from '../CropTable/CropTable';

function CropPage() {

    return (
        <div>
            <h1>Yearly Crop Yield</h1>
            <CropForm />
            <CropTable />

        </div>
    )
}

export default CropPage;