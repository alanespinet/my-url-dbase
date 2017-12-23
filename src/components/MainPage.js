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
      <div>
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
    );
  }
}


const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(MainPage);
