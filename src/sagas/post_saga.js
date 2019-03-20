import axios from 'axios';
import {call, takeEvery} from 'redux-saga/effects';
import {SEND_TASK} from '../actions/task_form_actions';

const Name = 'Maxim';

function postTask(data) {
    let form = new FormData();
    form.append('username', data.name);
    form.append('email', data.email);
    form.append('text', data.task);
    return axios({
        url: `https://uxcandy.com/~shapoval/test-task-backend/create?developer=${Name}`,
        crossDomain: true,
        method: 'POST',
        mimeType: 'multipart/form-data',
        contentType: false,
        processData: false,
        data: form,
        dataType: 'json',
    });  
}

function* postTaskWorker(action){
    const response = yield call(postTask, action.task);
    console.log(response.data);
}

export function* watchSendTask (){
    yield takeEvery(SEND_TASK, postTaskWorker);
}