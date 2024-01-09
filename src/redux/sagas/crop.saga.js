import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* cropSaga(action) {
    yield takeLatest('FETCH_YIELDS', fetchCrops);
    yield takeLatest('SEND_YIELD_TO_SERVER', sendCrops);
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
    }
};

function* sendCrops(action){
    try{
        yield axios.post('/api/crop', action.payload);
        yield put({ type: 'FETCH_YIELDS'});
    } catch (error) {
        console.log('Error in sendCrop', error);
        alert('Unable to add yield.');
        throw error;
    }

}


export default cropSaga;
