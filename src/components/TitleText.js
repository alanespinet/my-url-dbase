import React from 'react';

export default (props) => (
  <div className="title-text">
    <h3>{props.headline}:</h3>
    <p>{props.content}</p>
  </div>
);
