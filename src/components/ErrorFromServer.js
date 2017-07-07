import React from 'react';
import ReactDOM from 'react-dom';
import './SignupModal.css';
import './SignupLogin.css';
import './ErrorFromServer.css';


class ErrorFromServer  extends React.Component {
	constructor(props){
    super(props);
	this.state={
		successstatus:'',
		message:''
	};


	render() {
    {/*Render nothing if the "show" prop is false*/}
    if(!this.props.iserror) {
    	return null;

    }
    
  }
}