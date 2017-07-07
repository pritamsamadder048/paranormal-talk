import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post'
import ComingSoon from './components/ComingSoon'
import SignupLogin from './components/SignupLogin'
import Home from './components/Home';
import AddPost from './components/AddPost';

{/*
// class App extends Component {
  // render() {
    // return (
      // <div className="App">
        // <div className="App-header">
          // <img src={logo} className="App-logo" alt="logo" />
          // <h2>Welcome to React</h2>
        // </div>
        // <p className="App-intro">
          // To get started, edit <code>src/App.js</code> and save to reload.
        // </p>
      // </div>
    // );
  // }
// }

*/}

class App extends Component {
	constructor(props){
    super(props);
    };
  render() {
    return (
      <div className="App Template-left ">
	       {/*<ComingSoon />*/}
         <Switch>
            <Route exact path='/' component={ComingSoon}/>
            <Route exact path='/home' component={Home}/> 
            <Route exact path='/post' component={Post}/> 
          </Switch>
      </div>
    );
  }
}

export default App;
