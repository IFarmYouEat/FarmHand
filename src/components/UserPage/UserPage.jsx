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
      <div>
        <h1>2024</h1>
        <table>
          <thead>
            <tr>
              <td></td>
              <td>Total Yield</td>
              <td>Open Contracts</td>
              <td>Delivered</td>
              <td>Available</td>
              <td>Average Price</td>
            </tr>
          </thead>
          <tbody>
            
          </tbody>

        </table>
      </div>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
