import React from 'react';
import { connect } from 'react-redux';

import { startLoginGoogle } from '../firebase/auth';


export const LoginPage = ({ startLoginGoogle }) => (
  <div>
    <button onClick={ startLoginGoogle }>Login with Google</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLoginGoogle: () => dispatch( startLoginGoogle() )
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
