import { createStore, applyMiddleware } from 'redux';
import urlsReducer from './reducers/urls';
import thunk from 'redux-thunk';

export default createStore( urlsReducer, applyMiddleware(thunk) );
