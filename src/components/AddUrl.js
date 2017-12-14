import React from 'react';


export default class AddUrl extends React.Component {

  state = { error: undefined };

  onHandleAddUrl = (e) => {
    e.preventDefault();
    const title = e.target.elements.urlTitle.value.trim();
    const url = e.target.elements.urlUrl.value;
    const description = e.target.elements.urlTitle.value.trim();
    const error = this.props.handleAddUrl({ title, url, description });

    this.setState( () => ({ error }));
  }


  render(){
    return (
      <div>
        { this.state.error && <p>Error: {this.state.error}</p> }
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
