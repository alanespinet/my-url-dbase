import React from 'react';
import { connect } from 'react-redux';

import { startAddUrl } from '../redux/actions/actions';



class AddUrl extends React.Component {

  onHandleAddUrl = (e) => {
    e.preventDefault();
    const title = e.target.elements.urlTitle.value.trim();
    const url = e.target.elements.urlUrl.value;
    const description = e.target.elements.urlDescription.value.trim();

    this.props.dispatch( startAddUrl({ title, url, description }) );
    this.props.history.push("/");
  }


  render(){
    return (
      <div>
        <form onSubmit={this.onHandleAddUrl}>
          <label htmlFor="url-title">Title:</label>
          <input type="text" name="urlTitle" id="url-title"/>

          <label htmlFor="url-url">Url:</label>
          <input type="text" name="urlUrl" id="url-url"/>

          <label htmlFor="url-description">Description:</label>
          <input type="text" name="urlDescription" id="url-description"/>
          <button>Add Url</button>
        </form>
      </div>
    );
  }

}


export default connect()(AddUrl);
