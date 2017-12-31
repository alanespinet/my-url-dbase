import React from 'react';
import UrlSingleInList from './UrlSingleInList';


export default (props) => (
  <div className="urls-list-container">
    <h2>Saved Urls:</h2>
    <div className="urls-list">
      {props.urls.map( (url, index) => (
        <UrlSingleInList
          key={index}
          title={url.title}
          handleSelection={props.handleSelection}
          handleDeletion={props.handleDeletion}
        />
      ) )}
    </div>
  </div>
);
