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
      <div className="add-page">
        <form onSubmit={this.onHandleAddUrl}>
          <div className="wrapper">
            <div className="control-group">
              <label htmlFor="url-title">Title:</label>
              <input type="text" name="urlTitle" id="url-title"/>
            </div>

            <div className="control-group">
              <label htmlFor="url-url">Url:</label>
              <input type="text" name="urlUrl" id="url-url"/>
            </div>

            <div className="control-group">
              <label htmlFor="url-description">Description:</label>
              <textarea name="urlDescription" id="url-description"></textarea>
            </div>

            <div className="button-wrapper">
              <button>Add Url</button>
            </div>
          </div>
        </form>
      </div>
    );
  }

}


export default connect()(AddUrl);
