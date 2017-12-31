import * as firebase from 'firebase';

const config = {
  apiKey: "a",
  authDomain: "b",
  databaseURL: "https://urlsdbase.com",
  projectId: "c",
  storageBucket: "d",
  messagingSenderId: "e"
};

firebase.initializeApp(config);
const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
