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
    <div>
      <div className="container" >
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Crop</th>
              <th>Total Yield</th>
              <th>Status</th>
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
                  <td>{entry.status}</td>
                  <td>
                    <span>
                      {<button onClick={() => removeYield(entry.id)}>Delete</button>}
                      {<button onClick={() => updateYield(entry)}>Edit</button>}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default CropTable;