import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import { startSetUrls } from './redux/actions/actions';

import { firebase } from './firebase/firebase';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import UrlDbase, { history } from './components/UrlDbase';
import { login, logout } from './firebase/auth';


const jsx = (
  <Provider store={store}>
    <UrlDbase />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if( !hasRendered ){
    ReactDOM.render( jsx, document.getElementById('app') );
    hasRendered = true;
  }
}

ReactDOM.render(
  <p>Loading urls data...</p>,
  document.getElementById('app')
);


firebase.auth().onAuthStateChanged( (user) => {
  if( user ) {
    store.dispatch(login(user.uid));
    store.dispatch( startSetUrls() ).then( () => {
      renderApp();
      if( history.location.pathname === '/' ){
        history.push('/urls');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
