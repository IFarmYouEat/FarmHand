import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* contractSaga(action) {
    yield takeLatest('FETCH_CONTRACTS', fetchContracts);
    yield takeLatest('REMOVE_CONTRACT', deleteContract);
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

function* deleteContract(action){
    try{
        yield axios.delete(`/api/contract/${action.payload}`);
        yield put({ type:'FETCH_CONTRACTS'});
    } catch (error) {
        console.log('Unable to remove contract.', error);
        alert('Unable to remove contract.');
        throw error;
    };
};




export default contractSaga;