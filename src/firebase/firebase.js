import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDdGxlfqloUwQArnbtUrk6EuGNARmmq4-8",
    authDomain: "react-redux-todo-9bc94.firebaseapp.com",
    projectId: "react-redux-todo-9bc94",
    storageBucket: "react-redux-todo-9bc94.appspot.com",
    messagingSenderId: "847545276194",
    appId: "1:847545276194:web:3ca565010592c44418777b",
    measurementId: "G-9S78TCD8P8"
  }); 

  const database = firebaseApp.firestore();

  export default database;