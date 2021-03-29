import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyDPQGyEI7f2ZZCkvXQBQKAKMFUqUdR6A8c",
  authDomain: "react-firebase-real-time-chat.firebaseapp.com",
  projectId: "react-firebase-real-time-chat",
  storageBucket: "react-firebase-real-time-chat.appspot.com",
  messagingSenderId: "531789765270",
  appId: "1:531789765270:web:24addb0a92d35e3beb40b7",
  measurementId: "G-MMVJMCHVQK"
});


const auth = firebase.auth();
const firestore = firebase.firestore();
export const Context = createContext({ auth, firestore, firebase });

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      firestore,
      firebase,
      auth
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
