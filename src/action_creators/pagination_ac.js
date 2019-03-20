import { CHANGE_PAGE } from '../actions/pagination_actions';

export const changePage = (page) => ({ 
    type: CHANGE_PAGE,
    page
});