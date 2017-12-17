import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <header>
    <h1>My UrlDBase App</h1>
    <NavLink activeClassName="active" to="/" exact={true}> Home </NavLink>
    <NavLink activeClassName="active" to="/add"> Add </NavLink>
    <NavLink activeClassName="active" to="/about"> About </NavLink>
  </header>
);
