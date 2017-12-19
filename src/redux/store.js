import { createStore } from 'redux';
import urlsReducer from './reducers/urls';

export default createStore( urlsReducer );
