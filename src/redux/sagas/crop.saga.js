import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* cropSaga(action) {
    yield takeLatest('FETCH_YIELDS', fetchCrops);
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


export default cropSaga;
