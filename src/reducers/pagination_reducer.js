import { CHANGE_PAGE } from '../actions/pagination_actions';

const initialState = {
    currentPage: 1
};

export const paginationReducer = (state = initialState, action) => {
    switch (action.type){
    case CHANGE_PAGE : 
        return{
            ...state,
            currentPage: action.page
        };
    default: return state;
    }
};