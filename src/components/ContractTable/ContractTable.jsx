import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ContractTable.css';

function ContractTable({editRow}) {

    const dispatch = useDispatch();
    const contracts = useSelector(store => store.contract);
    console.log(contracts);

    useEffect(() => {
        dispatch({ type: 'FETCH_CONTRACTS' });
    }, []);

    const removeContract = (id) => {
        dispatch({ type: 'REMOVE_CONTRACT', payload: id });
    };

    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>Contract ID</th>
                        <th>Location</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Delivery Month</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {contracts.map(entry => {
                        return (
                            <tr key={entry.id}>
                                <td>{entry.contract_id}</td>
                                <td>{entry.location}</td>
                                <td>{entry.amount}</td>
                                <td>{entry.price}</td>
                                <td>{entry.month}</td>
                                <td>{entry.status}</td>
                                <td>
                                    <span>
                                        {<button className="btn" onClick={() => editRow(entry)}>Edit</button>}
                                        {<button className="btn" onClick={() => removeContract(entry.id)}>Delete</button>}
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