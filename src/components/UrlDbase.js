import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Url from './Url';
import UrlList from './UrlList';
import ConnectedAddUrl from './AddUrl';
import ConnectedMainPage from './MainPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import ConnectedLoginPage from './LoginPage';
import ConnectedHeader from './Header';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();


export default class UrlDbase extends React.Component {
  render = () => {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <PublicRoute path="/" component={ConnectedLoginPage} exact={true}/>
            <PrivateRoute path="/urls" component={ConnectedMainPage} />
            <PrivateRoute path="/add" component={ConnectedAddUrl} />
            <PrivateRoute path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  };
}
