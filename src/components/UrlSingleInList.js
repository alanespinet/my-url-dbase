import React from 'react';
import TitleText from './TitleText'

export default class UrlSingleInList extends React.Component {

  render(){
    return (
      <div className="url-single-in-list" onClick={this.onHandleSelection}>
        <div className="url-single-in-list__text">
          <p>{this.props.title}</p>
        </div>
        <button onClick={this.onHandleDeletion}>Delete</button>
      </div>

    );
  }


  onHandleSelection = (e) => {
    var current = e.currentTarget;
    var elements = document.getElementsByClassName('url-single-in-list');

    for(let element of elements){ element.classList.remove('active'); }
    current.classList.add('active');

    this.props.handleSelection( this.props.title );
  }

  onHandleDeletion = () => {
    this.props.handleDeletion( this.props.title );
  }
}
