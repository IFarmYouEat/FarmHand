import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* cropSaga(action) {
    yield takeLatest('FETCH_YIELDS', fetchCrops);
    yield takeLatest('SEND_YIELD_TO_SERVER', sendCrop);
    yield takeLatest('REMOVE_YIELD', deleteCrop);
    yield takeLatest('UPDATE_YIELD', updateCrop);
};

function* fetchCrops(){
    try {
        const cropData = yield axios.get('/api/crop');
        yield put ({
            type: 'SET_YIELDS',
            payload: cropData.data
        });
    } catch (error) {
        console.log('cropSaga failed.', error);
    };
};

function* sendCrop(action){
    try{
        yield axios.post('/api/crop', action.payload);
        yield put({ type: 'FETCH_YIELDS'});
    } catch (error) {
        console.log('Error in sendCrop', error);
        alert('Unable to add yield.');
        throw error;
    };
};

function* deleteCrop(action){
    try{
        yield axios.delete(`/api/crop/${action.payload}`);
        yield put({ type: 'FETCH_YIELDS'});
    }catch (error) {
        console.log('Unable to remove yield.', error);
        alert('Unable to remove yield.');
        throw error;
    };
};

function* updateCrop(action){
    try{
        yield axios.put('/api/crop', action.payload);
        yield put({ type: 'FETCH_YIELDS'});
    }catch (error) {
        console.log('Error in Crop Saga, unable to update', error);
        alert('Unable to update yield.');
        throw error;
    };
};


export default cropSaga;
