
import React , { Component }  from 'react';

import ReactDOM  from 'react-dom';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import ComingSoon from './components/ComingSoon';
import registerServiceWorker from './registerServiceWorker';
//import { Router, Route, Link, IndexRoute  } from 'react-router'



{/*
var config = {
    apiKey: "AIzaSyAMKkoRyCMj_ss5dnCnkBZj5wE2cphJbVk",
    authDomain: "paranormaltalk-57001.firebaseapp.com",
    databaseURL: "https://paranormaltalk-57001.firebaseio.com",
    projectId: "paranormaltalk-57001",
    storageBucket: "paranormaltalk-57001.appspot.com",
    messagingSenderId: "614108459505"
  };
firebase.initializeApp(config);
*/}

{/*
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/}


ReactDOM.render((
    <Router >
        <App/>                                                                                  
    </Router>),
    document.getElementById('root')
);
