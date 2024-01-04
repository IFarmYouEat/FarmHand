import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CropPage() {
    
    const dispatch = useDispatch();
    const yields = useSelector(store => store.crop);

    useEffect(() => {
        dispatch({type: 'FETCH_YIELDS' });
    }, []);

    return(
        <div>
            <p>Hello you absolute legend!</p>
            <table>
                <thead>
                    <td>ID</td>
                    <td>User</td>
                    <td>Year</td>
                    <td>Crop</td>
                    <td>Total Yield</td>
                </thead>
                <tbody>
                    {yields.map(entry => {
                        return(
                            <tr>
                                <td>{entry.id}</td>
                                <td>{entry.user_id}</td>
                                <td>{entry.year}</td>
                                <td>{entry.crop}</td>
                                <td>{entry.yield}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default CropPage;