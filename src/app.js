import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import UrlDbase from './components/UrlDbase';

ReactDOM.render(
  <Provider store={store}>
    <UrlDbase />
  </Provider>,
  document.getElementById('app')
);
