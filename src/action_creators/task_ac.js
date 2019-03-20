import { TOGGLE_TASK, TOGGLE_CHANGE, TASK_CHANGE } from '../actions/task_actions';

export const toggleTask = (payload) =>({
    type: TOGGLE_TASK,
    payload
});

export const toggleChange = (id) => ({
    type: TOGGLE_CHANGE,
    id
});

export const taskChange = (payload) => ({
    type: TASK_CHANGE,
    payload
});

