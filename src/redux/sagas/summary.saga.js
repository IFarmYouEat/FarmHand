import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* summarySaga(action) {
    yield takeLatest('FETCH_SUMMARY', fetchSummary);
}

function* fetchSummary(){
    try{
        const summaryData = yield axios.get('/api/summary');
        yield put ({
            type: 'SET_SUMMARY',
            payload: summaryData.data
        });
    } catch (error) {
        console.log('fetchSummary in summary.saga failed.', error);
    }
}

export default summarySaga;