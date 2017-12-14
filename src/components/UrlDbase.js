import React from 'react';

import Url from './Url';
import UrlList from './UrlList';
import AddUrl from './AddUrl';

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


  render = () => (
    <div>
      <UrlList
        urls={this.state.urls}
        handleSelection={this.handleSelection}
        handleDeletion={this.handleDeletion}
      />
      <Url
        title={this.state.selected.title}
        url={this.state.selected.url}
        description={this.state.selected.description}
      />
      <AddUrl handleAddUrl={this.handleAddUrl} />
    </div>
  );


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
