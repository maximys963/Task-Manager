import { TOGGLE_TASK, TOGGLE_CHANGE, TASK_CHANGE } from '../actions/task_actions';
import { SEARCH } from '../actions/search_action';
import { WRITE_TO_STORE } from '../actions/action';
import { ADD_TASK } from '../actions/task_form_actions';
const initialState = [
    {
        email: 'rob@gmail.com',
        id: '213',
        status: 10,
        text: 'relax',
        username: 'Roberto',
        visible: true,
        changed: false
    },
    {
        email: 'kim@gmail.com',
        id: '214',
        status: 0,
        text: 'relax',
        username: 'Kim',
        visible: true,
        changed: false
    },
    {
        email: 'aang@gmail.com',
        id: '215',
        status: 0,
        text: 'Bring balance',
        username: 'Anng',
        visible: true,
        changed: false
    },
    {
        email: 'john_doe@gmail.com',
        id: '216',
        status: 0,
        text: 'Lorem ipsum dolor sit amet',
        username: 'John Doe',
        visible: true,
        changed: false
    },
    {
        email: 'enakin_skywalker@gmail.com',
        id: '217',
        status: 0,
        text: 'Lorem ipsum dolor sit amet',
        username: 'Enakin Skywalker',
        visible: true,
        changed: false
    }
];

export const mainReducer = ( state = initialState, action) => {
    switch (action.type) {
    case WRITE_TO_STORE:
        return[
            ...state,
            ...action.data
        ];    
    case TOGGLE_TASK:
        const index = state.findIndex( task => task.id === action.payload.id);
        return[
            ...state.slice(0, index),
            {
                ...state[index],
                status: action.payload.status === 10 ? 0 : 10
            },
            ...state.slice(index + 1)
        ];
    case TASK_CHANGE: 
        const index3 = state.findIndex( task => task.id === action.payload.id);
        return[
            ...state.slice(0, index3),
            {
                ...state[index3],
                text: action.payload.text
            },
            ...state.slice(index3 + 1)
        ];

    case TOGGLE_CHANGE:
        const index2 = state.findIndex( task => task.id === action.id);
        return[
            ...state.slice(0, index2),
            {
                ...state[index2],
                changed: !state[index2].changed,
            },
            ...state.slice(index2 + 1)
        ];    
    case SEARCH:
        const searchedElements =  state.map(task => task.username.toLowerCase()
            .indexOf(action.string.toLowerCase()) === -1
            ? { ...task, visible: false}
            : { ...task, visible: true}
        );
        return[ 
            ...searchedElements
        ];
    case ADD_TASK: return state.concat(action.task);
    default: return state;
    }
};