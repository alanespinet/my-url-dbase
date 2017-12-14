import React from 'react';
import TitleText from './TitleText'

export default class UrlSingleInList extends React.Component {

  render(){
    return (
      <div>
        <div onClick={this.onHandleSelection}>
          <TitleText
            headline="Title"
            content={this.props.title}
          />
        </div>
        <button onClick={this.onHandleDeletion}>Delete</button>
      </div>

    );
  }


  onHandleSelection = () => {
    this.props.handleSelection( this.props.title );
  }

  onHandleDeletion = () => {
    this.props.handleDeletion( this.props.title );
  }
}
