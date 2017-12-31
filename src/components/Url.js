import React from 'react';
import TitleText from './TitleText'

export default (props) => (
  <div className="selected-url">
    <TitleText headline="Title" content={props.title} />

    <div className="title-text">
      <h3>URL:</h3>
      <p><a href={props.url} target="_blank">{props.url}</a></p>
    </div>

    <TitleText headline="Description" content={props.description} />
  </div>
);
