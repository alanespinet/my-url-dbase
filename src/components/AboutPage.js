import React from 'react';

export default () => {
  return (
    <div>
      <p>Application created by Alan Espinet:</p>
      <p><a href="http://alanespinet.com/" target="_blank">alanespinet.com/</a></p>

      <div>
        <NavLink to="/about/bio">Bio</NavLink>
        <NavLink to="/about/contact">Contact</NavLink>
        <NavLink to="/about/references">References</NavLink>
      </div>
    </div>
  );
};
