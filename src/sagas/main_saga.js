import axios from 'axios';
import { takeEvery, takeLatest, all, put, call } from 'redux-saga/effects';
import { FETCH_ASYNC_DATA, FETCH_DATA, WRITE_TO_STORE } from '../actions/action';
import { watchSendTask } from './post_saga';
 
const Name = 'Maxim';

function getPosts() {
    console.log('here');
    return axios({
        url: `https://uxcandy.com/~shapoval/test-task-backend/?developer=${Name}`,
        method: 'GET',       
    });  
}

function* fetchDataWorker(){
    const response = yield call(getPosts);
    console.log(response.data.message.tasks);
    const answer = response.data.message.tasks.map(task => ({...task, visible: true, changed: false}));
    console.log(answer);
    yield put({
        type: WRITE_TO_STORE,
        data: answer
    });
}

function* watchFetchData(){
    yield takeEvery(FETCH_DATA, fetchDataWorker);
}

export default function* rootSaga(){
    yield all([
        watchFetchData(),
        watchSendTask()
    ]);
}