import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CropTable.css'


function CropTable() {

  const dispatch = useDispatch();
  const yields = useSelector(store => store.crop);

  useEffect(() => {
    dispatch({ type: 'FETCH_YIELDS' });
  }, []);

  const removeYield = (id) => {
    dispatch({ type: 'REMOVE_YIELD', payload: id });
  };

  const updateYield = (editedYield) => {
    dispatch({ type: 'UPDATE_YIELD', payload: editedYield });
    console.log("Updated yield fields:", Yield);
  };

  return (
    <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Crop</th>
              <th>Total Yield</th>
              <th>Source</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {yields.map(entry => {
              return (
                <tr key={entry.id}>
                  <td>{entry.year}</td>
                  <td>{entry.crop}</td>
                  <td>{entry.yield}</td>
                  <td>{entry.source}</td>
                  <td>
                    <span className="actions">
                      {<button onClick={() => updateYield(entry)}>Edit</button>}
                      {<button onClick={() => removeYield(entry.id)}>Delete</button>}
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


export default CropTable;