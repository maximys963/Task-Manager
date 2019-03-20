import {CHANGE_NAME,
    CHANGE_EMAIL,
    CHANGE_TASK
} from '../actions/task_form_actions';

const initialState = {
    name: '',
    email: '',
    task: ''
};

export const formReducer = ( state = initialState , action) => {
    switch (action.type) {
    case CHANGE_NAME:
        return{
            ...state,
            name: action.value,
        };
    case CHANGE_EMAIL:
        return{
            ...state,
            email: action.value
        };  
    case CHANGE_TASK:
        return{
            ...state,
            task: action.value
        };      
    default: return state;
    }
};