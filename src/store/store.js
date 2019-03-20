import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { FETCH_DATA } from '../actions/action';
import { mainReducer } from '../reducers/main_reducer';
import { formReducer } from '../reducers/task_form_reducer';
import { loginReducer } from '../reducers/login_reducer';
import { paginationReducer } from '../reducers/pagination_reducer';
import rootSaga from '../sagas/main_saga';

const rootReducer = combineReducers({
    mainReducer,
    formReducer,
    login: loginReducer,
    pagination: paginationReducer
});

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

store.dispatch({type: FETCH_DATA});