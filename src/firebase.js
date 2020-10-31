import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC3UoGJN6yZWUDFlGsvV09BEE1_TGdUag0",
    authDomain: "triber-d6380.firebaseapp.com",
    databaseURL: "https://triber-d6380.firebaseio.com",
    projectId: "triber-d6380",
    storageBucket: "triber-d6380.appspot.com",
    messagingSenderId: "919452877630",
    appId: "1:919452877630:web:cd1074dcb5fb4352e9a26f",
    measurementId: "G-FDQBRJ6KGH"
  };
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth= firebase.auth();
  const  provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider };
  export default db;
  


