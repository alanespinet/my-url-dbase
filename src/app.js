import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import { startSetUrls } from './redux/actions/actions';

import './firebase/firebase';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import UrlDbase from './components/UrlDbase';


ReactDOM.render(
  <p>Loading urls data...</p>,
  document.getElementById('app')
);

store.dispatch( startSetUrls() ).then( () => {
  ReactDOM.render(
    <Provider store={store}>
      <UrlDbase />
    </Provider>,
    document.getElementById('app')
  );
});
