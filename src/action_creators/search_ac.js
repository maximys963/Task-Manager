import { SEARCH } from '../actions/search_action';

export const searchTask = (string) => ({
    type: SEARCH,
    string
});