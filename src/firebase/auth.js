import { firebase, googleAuthProvider, facebookAuthProvider } from './firebase';

export const startLoginGoogle = () => {
  return () => {
    return firebase.auth().signInWithPopup( googleAuthProvider )
      .then( () => { console.log('Authenticated') } )
      .catch( () => { console.log('Was not Authenticated') } );
  }
}

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});



export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  }
}


export const logout = () => ({
  type: 'LOGOUT'
});
