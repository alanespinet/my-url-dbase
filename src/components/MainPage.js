import React from 'react';
import { connect } from 'react-redux';

import UrlList from './UrlList';
import Url from './Url';

import { getUrl, startDeleteUrl } from '../redux/actions/actions';


class MainPage extends React.Component {

  handleSelection = (title) => {
    this.props.dispatch( getUrl(title) );
  }

  handleDeletion = (title) => {
    this.props.dispatch( startDeleteUrl(title) );
  }


  render(){

    return (
      <div className="main-page">
        <div className="wrapper">
          <UrlList
            urls={this.props.urls}
            handleSelection={this.handleSelection}
            handleDeletion={this.handleDeletion}
          />

          <Url
            title={this.props.selected.title}
            url={this.props.selected.url}
            description={this.props.selected.description}
          />
        </div>
      </div>
    );
  }
}


const mapStateToUrls = (state) => state.urls;

export default connect(mapStateToUrls)(MainPage);
