import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAMKkoRyCMj_ss5dnCnkBZj5wE2cphJbVk",
    authDomain: "paranormaltalk-57001.firebaseapp.com",
    databaseURL: "https://paranormaltalk-57001.firebaseio.com",
    projectId: "paranormaltalk-57001",
    storageBucket: "paranormaltalk-57001.appspot.com",
    messagingSenderId: "614108459505"
  };
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
