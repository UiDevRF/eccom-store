import {createStore , applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rooReducer from './rootReducer';

const middlewares = [logger];

const store = createStore(rooReducer,applyMiddleware(...middlewares));

export default store;