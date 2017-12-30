import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import urlsReducer from './reducers/urls';
import authReducer from './reducers/auth';

export default createStore(
  combineReducers({
    urls: urlsReducer,
    auth: authReducer
  }),
  applyMiddleware(thunk)
);
