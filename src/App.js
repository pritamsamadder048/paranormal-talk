import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post'
import ComingSoon from './components/ComingSoon'


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
	  <ComingSoon />
      </div>
    );
  }
}

export default App;