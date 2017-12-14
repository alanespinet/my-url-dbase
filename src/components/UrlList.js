import React from 'react';
import UrlSingleInList from './UrlSingleInList';


export default (props) => (
  <div>
    {props.urls.map( (url, index) => (
      <UrlSingleInList
        key={index}
        title={url.title}
        handleSelection={props.handleSelection}
        handleDeletion={props.handleDeletion}
      />
    ) )}
  </div>
);
