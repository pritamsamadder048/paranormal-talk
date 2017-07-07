import React, { Component } from 'react';
import axios from 'axios';
import Qs from "qs";
import './SignupLogin.css';
import SignupModal from './SignupModal';
import './SignupModal.css';





class SignupLogin extends Component {
	constructor(props){
    super(props);
	this.state={
		email:'',
		password:'',
    email_error:false,
    password_error:false,
		isOpen: false
	};
	this.handleInputChange=this.handleInputChange.bind(this);
	this.handleLogin=this.handleLogin.bind(this);
	this.handleSignupModal=this.handleSignupModal.bind(this);
	this.toggleModal=this.toggleModal.bind(this);
    }
	
toggleModal(event){
	event.preventDefault();
	
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


	
handleInputChange(event){

const target=event.target;
    const value=target.value;
    const name=target.name;

    this.setState({
      [name]:value
    });
}

handleSignupModal(event)
{
	event.preventDefault();
	alert("openning signup dialogue..");
}
handleLogin(event)
  {
    event.preventDefault();
    var lurl="http://192.168.200.2:8000/paranormaltalkwebserviceapp/login/";
    if(!this.state.email || !this.state.password)
        {
            this.setState({
                ["email_error"]:!this.state.email,
                ["password_error"]:!this.state.password
                            });
            // alert("please provide all the details "+JSON.stringify(this.state));
            return null;
        }
        else
        {
            this.setState({
                ["email_error"]:!this.state.email,
                ["password_error"]:!this.state.password
                            });
        }

        if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(this.state.email))
            {
                
                this.setState({
                    ["email_error"]:true
                });
                alert("please enter a valid email address");
                return null;
            }
            else{
                this.setState({
                    ["email_error"]:false
                });
            }
        if( this.state.password.length>=6)
            {

                this.setState({
                    ["password_error"]:false
                    
                });
                
            }
        else
        {
          this.setState({
                    ["password_error"]:true
                    
                });
          alert("Wrong Password");
          return null;
        }
        var reqdata={
                        
                        email: this.state.email,
                        password: this.state.password
                        
                    };
            reqdata=Qs.stringify(reqdata, {arrayFormat: 'brackets'});
            var config = {
                             headers : {
                                 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                                 
                             }
                         };
            axios.post(lurl,reqdata,config ).then(response => {
                    // alert(JSON.stringify(response.data));
                    console.log(response);
                    if(response.data.successstatus=="ok")
                    {
                        alert("successfully logged in .. session key -> "+response.data.user_session_key);
                    }
                    else
                    {
                      alert(response.data.message);
                      return null;
                    }

                  }).catch(function (error) {
                    // alert(JSON.stringify(error));
                    alert("Error occured");
                    console.log(error);
                  });
  }

render(){

return(
<div id="signuploginmodal" className="modal show" tabindex="-1" area-hidden="true">
    <div className="modal-header">
        	<h1 className="text-center" id="signuploginmodallabel">Login / Signup</h1>

    </div>
    <div className="modal-body">
        <form>
            <div className="control-group">
                
                <div className="controls">
                    <input className={"input-block-level input__field--haruki placeholder-color  email_error-"+this.state.email_error} name="email" id="email" onChange={this.handleInputChange} type="text" value={this.state.email} placeholder="Email"/>
                </div>
            </div>
            <div className="control-group">
                
                <div className="controls">
                    <input className={"input-block-level input__field--haruki placeholder-color password_error-"+this.state.password_error} name="password" id="password"  onChange={this.handleInputChange} type="password" value={this.state.password} placeholder="Password"/>
                </div>
            </div>
          	
            <div className="control-group">
			              <label className="checkbox label-blue">
                    <input type="checkbox" id="rememberme" className="custom-margin10"/>Remember me</label>
			
            </div>
			
        </form>

    </div>
    <div className="modal-footer">
      	<button className="btn btn-link">Forgot password?</button>
        <button className="btn btnExtra btn-large btn-primary" onClick={this.handleLogin}>Login</button>
        <button className="btn btnExtra btn-large btn-primary" onClick={this.toggleModal}>Signup</button>
    </div>

    <div id="customsignup" >
      <SignupModal show={this.state.isOpen} onClose={this.toggleModal}/>
    </div>
</div>
)

}

}

export default SignupLogin;