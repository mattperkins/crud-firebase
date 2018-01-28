import * as firebase from 'firebase'
let database

export const init = ()=>{
// Initialize Firebase
  let config = {
    apiKey: "AIzaSyA4lQx_cTdo_UG3t68SnXNAOsZGNdy0Jrs",
    authDomain: "react-crud-firebase.firebaseapp.com",
    databaseURL: "https://react-crud-firebase.firebaseio.com",
    projectId: "react-crud-firebase",
    storageBucket: "react-crud-firebase.appspot.com",
    messagingSenderId: "1054634377642"
  };
  firebase.initializeApp(config)
}