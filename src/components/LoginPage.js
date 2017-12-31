import React from 'react';
import { connect } from 'react-redux';

import { startLoginGoogle } from '../firebase/auth';


export const LoginPage = ({ startLoginGoogle }) => (
  <div className="login-page">
    <div className="wrapper">
      <p>Welcome to Urls D-Base application. Here, you will be able to store your favorite Urls, without the fear of losing them because of browsers issues, change of computer, operating system problem (actually, there are so many factors that can make you lose your favorite Urls). Please log in with your Google account and start enjoying the application</p>
      <button onClick={ startLoginGoogle }>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLoginGoogle: () => dispatch( startLoginGoogle() )
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
