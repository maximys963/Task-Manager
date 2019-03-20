import {CHANGE_NAME,
    CHANGE_EMAIL,
    CHANGE_TASK,
    SEND_TASK,
    ADD_TASK
} from '../actions/task_form_actions';

export const changeName = (value) => ({
    type: CHANGE_NAME,
    value
});

export const changeEmail = (value) => ({
    type: CHANGE_EMAIL,
    value
});

export const changeTask = (value) => ({
    type: CHANGE_TASK,
    value
});

export const sendTask = (task) => ({
    type: SEND_TASK,
    task
});

export const addTask = (task) => ({
    type: ADD_TASK,
    task
});