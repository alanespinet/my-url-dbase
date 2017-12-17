import React from 'react';

import UrlList from './UrlList';
import Url from './Url';


export default (props) => (
  <div>
    <UrlList
      urls={props.urls}
      handleSelection={props.handleSelection}
      handleDeletion={props.handleDeletion}
    />
    <Url
      title={props.selected.title}
      url={props.selected.url}
      description={props.selected.description}
    />
  </div>
);
