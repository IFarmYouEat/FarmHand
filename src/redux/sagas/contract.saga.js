import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* contractSaga(action) {
    yield takeLatest('FETCH_CONTRACTS', fetchContracts);
    yield takeLatest('REMOVE_CONTRACT', deleteContract);
    yield takeLatest('SEND_CONTRACT', postContract);
    yield takeLatest('UPDATE_CONTRACT', updateContract);
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

function* postContract(action){
    try{
        console.log("In Contract SAGA")
        yield axios.post('/api/contract', action.payload);
        yield put({ type: 'FETCH_CONTRACTS'});
        console.log("In Post Contract", action.payload)
    } catch (error) {
        console.log('Error in Contract Router - postContract', error);
        throw error;
    };
};

function* updateContract(action){
    console.log("In Update Contract", action.payload);
    try{
        yield axios.put('/api/contract', action.payload);
        yield put({ type: 'FETCH_CONTRACTS'});
    }catch (error) {
        console.log('Error in Contract SAGA, unable to update', error);
        throw error;
    };
};




export default contractSaga;