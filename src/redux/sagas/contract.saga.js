import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* contractSaga(action) {
    yield takeLatest('FETCH_CONTRACTS', fetchContracts);
};

function* fetchContracts(){
    try {
        const contractData = yield axios.get('/api/contract');
        yield put ({
            type: 'SET_CONTRACTS',
            payload: contractData.data
        })
    } catch (error) {
        console.log('contractSaga failed.', error);
    };
};




export default contractSaga;