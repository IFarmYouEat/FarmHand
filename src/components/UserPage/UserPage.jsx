import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './UserPage.css'

function UserPage() {
  
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const summary = useSelector(store => store.summary);

  useEffect(() => {
    dispatch({ type: 'FETCH_SUMMARY' })
  }, []);

  console.log(summary);

  return (
    <div className="UserPage">
      <div>
        <h2>Welcome, {user.username}!</h2>
        <p>Your ID is: {user.id}</p>
        <LogOutButton className="btn" />
      </div>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <td>Year</td>
              <td>Crop</td>
              <td>Total Yield</td>
              <td>Contracted</td>
              <td>Available</td>
              <td>Average Price</td>
            </tr>
          </thead>
          <tbody>
            {summary.map(entry => {
              return(
              <tr key= {entry.id}>
                <td>{entry.year}</td>
                <td>{entry.crop}</td>
                <td>{entry.crop_yield}</td>
                <td>{entry.contracted}</td>
                <td>{entry.available}</td>
                <td>{entry.avg}</td>
              </tr>
              )
            })

            }
            
          </tbody>

        </table>
      </div>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
