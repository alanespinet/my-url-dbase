import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Url from './Url';
import UrlList from './UrlList';
import ConnectedAddUrl from './AddUrl';
import ConnectedMainPage from './MainPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import Header from './Header';




export default class UrlDbase extends React.Component {
  render = () => {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={ConnectedMainPage} exact={true}/>
            <Route path="/add" component={ConnectedAddUrl} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
}
