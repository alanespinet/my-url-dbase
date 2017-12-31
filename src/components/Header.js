import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { startLogout } from '../firebase/auth';

export const Header = ({ startLogout }) => (
  <header className="menu">
    <NavLink activeClassName="active" to="/urls"> Home </NavLink>
    <NavLink activeClassName="active" to="/add"> Add </NavLink>
    <NavLink activeClassName="active" to="/about"> About </NavLink>
    <button onClick={ startLogout }>Logout</button>
  </header>
);


const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});


export default connect(undefined, mapDispatchToProps)(Header);
