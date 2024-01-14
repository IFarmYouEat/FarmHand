import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ContractTable.css';

function ContractTable( editRow ) {

    const dispatch = useDispatch();
    const contracts = useSelector(store => store.contract)

    useEffect(() => {
        dispatch({ type: 'FETCH_CONTRACTS'});
    }, []);

    return(
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>Contract ID</th>
                        <th>Location</th>
                        <th>Commodity</th>
                        <th>Quantity</th>
                        <th>Delivery</th>
                        <th>Fulfilled Amount</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {contracts.map(entry => {
                        return(
                            <tr key={entry.id}>
                                <td>{entry.contract_id}</td>
                                <td>{entry.location_name}</td>
                                <td>{entry.crop}</td>
                                <td>{entry.contracted_amt}</td>
                                <td>{entry.delivery_month}</td>
                                <td>{entry.delivered_amt}</td>
                                <td>{entry.status}</td>
                                <td>
                                    <span>
                                        {<button className="btn" onClick={() => editRow(entry)}>Edit</button>}
                                        {<button className="btn" onClick={() => removeContract(entry)}>Delete</button>}
                                    </span>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ContractTable;