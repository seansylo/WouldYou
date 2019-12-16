import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './_reducers';

let initialState = {};

export default createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger)
);