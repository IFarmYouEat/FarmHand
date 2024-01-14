import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ContractPage() {

    const dispatch = useDispatch();
    const contracts = useSelector(store => store.contract)

    useEffect(() => {
        dispatch({ type: 'FETCH_CONTRACTS'});
    }, []);

    return(
        <div>
            <p>Hello you absolute legend.</p>
        <p>{contracts[2].crop}</p>
        </div>
        
    )
}

export default ContractPage;