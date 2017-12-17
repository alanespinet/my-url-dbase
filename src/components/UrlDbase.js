import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Url from './Url';
import UrlList from './UrlList';
import AddUrl from './AddUrl';
import MainPage from './MainPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import Header from './Header';

export default class UrlDbase extends React.Component {
  state = {
    urls: [
      {
        title:"Google USA",
        url:"https://www.google.com/",
        description:"Popular Search Page"
      }, {
        title:"Alan Espinet Page",
        url:"http://alanespinet.com/",
        description:"Alan Espinet - Developer, official webpage"
      }
    ],

    selected: {title: 'please select one', url: '#', description: 'please select one'}
  };




  render = () => {

    const getMainPage = () => {
      return (
        <MainPage
         urls={this.state.urls}
         handleSelection={this.handleSelection}
         handleDeletion={this.handleDeletion}
         selected={this.state.selected}
       />
      );
    };

    const getAddUrl = (props) => (
      <AddUrl handleAddUrl={this.handleAddUrl} history={props.history} />
    );


    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={getMainPage} exact={true}/>
            <Route path="/add" component={getAddUrl} />
            <Route path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };


  handleAddUrl = (url) => {
    if( !url.url ) { return 'Please add a valid URL'; }
    this.setState( (prevState) => ({ urls: prevState.urls.concat(url) }) );
  }


  handleSelection = (urlTitle) => {
    var selectedUrl = this.state.urls.filter( (url) => url.title === urlTitle );
    if( selectedUrl[0] ) this.setState( () => ({ selected: selectedUrl[0] }) );
  }


  handleDeletion = (urlTitle) => {
    this.setState( (prevState) => ({
      urls: prevState.urls.filter( (url) => url.title !== urlTitle )
    }) );
  }
}
