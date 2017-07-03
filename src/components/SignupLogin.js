import React, { Component } from 'react';
import axios from 'axios';
import Qs from "qs";
import './SignupLogin.css';




class SignupLogin extends Component {
	constructor(props){
    super(props);
	this.state={
		email:'',
		password:''
	};
	this.handleInputChange=this.handleInputChange.bind(this);
	this.handleLogin=this.handleLogin.bind(this);
    };


	
handleInputChange(event){

const target=event.target;
    const value=target.value;
    const name=target.name;

    this.setState({
      [name]:value
    });
}
handleLogin(event)
  {
    event.preventDefault();
	alert("Hold on we are working..");
	{/*
	var lurl="http://192.168.200.2:8000/onelinkapp/login/";
	var reqdata={
    mobile: this.state.email,
    password: this.state.password
  };
	*/}
  {/*reqdata=httpParamSerializer(reqdata);
  reqdata=Qs.stringify(reqdata, {arrayFormat: 'brackets'});
  var config = {
         headers : {
             'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
         }
     };
  
	axios.post(lurl,reqdata,config )
  .then(response => {
    alert(JSON.stringify(response.data));
	console.log(response);
  })
  .catch(function (error) {
    alert(JSON.stringify(error));
	console.log(error);
  });
	*/}
	
    
	{/*
    axios.get('http://staging.euphern.com:8001/onelinkapp/getsurvicecategory/')
  .then(response => {
    console.log(response);
	var services=response.data
	this.setState({ services });
  
	
	
  })
  .catch(function (error) {
    console.log(error);
	alert(error);
  });
	*/}
	
  }

render(){

return(
<div tabindex="-1" className="modal show" id="myModal" aria-hidden="true">
    <div className="modal-header">
        	<h1 className="text-center" id="myModalLabel">Login / Signup</h1>

    </div>
    <div className="modal-body">
        <form>
            <div className="control-group">
                
                <div className="controls">
                    <input className="input-block-level input__field--haruki" name="email" id="email" onChange={this.handleInputChange} type="text" value={this.state.email} placeholder="Email"/>
                </div>
            </div>
            <div className="control-group">
                
                <div className="controls">
                    <input className="input-block-level input__field--haruki" name="password" id="password"  onChange={this.handleInputChange} type="password" value={this.state.password} placeholder="Password"/>
                </div>
            </div>
          	
            <div className="control-group">
			{/*<label className="checkbox">
                    <input type="checkbox" id="rememberme"/>Remember me</label>
			*/}
            </div>
        </form>
    </div>
    <div className="modal-footer">
      	<button className="btn btn-link">Forgot password?</button>
        <button className="btn btnExtra btn-large btn-primary" onClick={this.handleLogin}>Login</button>
        <button className="btn btnExtra btn-large btn-primary">Signup</button>
    </div>
</div>
)

}

}

export default SignupLogin;