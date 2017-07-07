import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Qs from "qs";
import './SignupModal.css';
import './SignupLogin.css';



class SignupModal extends React.Component {
	constructor(props){
    super(props);
	this.state={
		name:'',
		email:'',
		password:'',
		confirmpassword:'',
		mobile:'',
		gender:'',
        name_error:false,
        email_error:false,
        password_error:false,
        confirmpassword_error:false,
        mobile_error:false,
        gender_error:false
		
	};
	this.handleInputChange=this.handleInputChange.bind(this);
    this.handleSignup=this.handleSignup.bind(this);
    this.handleGenderChange=this.handleGenderChange.bind(this);
    this.handleClose=this.handleClose.bind(this);
    }

   handleClose(event)
   {
    event.preventDefault();
    this.setState({
        name:'',
        email:'',
        password:'',
        confirmpassword:'',
        mobile:'',
        gender:'',
        name_error:false,
        email_error:false,
        password_error:false,
        confirmpassword_error:false,
        mobile_error:false,
        gender_error:false,
        servererror:false
    });
    this.props.onClose(event);
   }

   handleInputChange(event){

	const target=event.target;
	    const value=target.value;
	    const name=target.name;

	    this.setState({
	      [name]:value
	    });
}

handleGenderChange(event) {
  this.setState({
    ["gender"]: event.target.value
  });
}

  handleSignup(event)
  {
        event.preventDefault();
        var lurl="http://192.168.200.2:8000/paranormaltalkwebserviceapp/registeruser/";
        if(!this.state.name || !this.state.email || !this.state.password || !this.state.confirmpassword )
        {
            this.setState({
                ["name_error"]:!this.state.name,
                ["email_error"]:!this.state.email,
                ["password_error"]:!this.state.password,
                ["confirmpassword_error"]:!this.state.confirmpassword,
                ["gender_error"]:!this.state.gender,
            });
            // alert("please provide all the details "+JSON.stringify(this.state));
            return null;
        }
        else
        {
            this.setState({
                ["name_error"]:!this.state.name,
                ["email_error"]:!this.state.email,
                ["password_error"]:!this.state.password,
                ["confirmpassword_error"]:!this.state.confirmpassword,
                ["gender_error"]:!this.state.gender,
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

            if(this.state.password===this.state.confirmpassword && this.state.password.length>=6)
            {

                this.setState({
                    ["password_error"]:false,
                    ["confirmpassword_error"]:false
                });
                
            }
            else if (this.state.password===this.state.confirmpassword && this.state.password.length<6)
            {
                this.setState({
                    ["password_error"]:true,
                    ["confirmpassword_error"]:true
                });
                alert("password must be more than 5 characters");
                return null
            }
            else
            {
                this.setState({
                    ["password_error"]:true,
                    ["confirmpassword_error"]:true
                });
                alert("password and confirm password does not match ");
                return null;
            }

            if(this.state.gender)
            {
                this.setState({
                    ["gender_error"]:false
                });
                // alert(this.state.gender);
            }
            else
            {
                this.setState({
                    ["gender_error"]:true
                });
                alert("please select your Gender");
                return null;
            }

            var reqdata={
                        name: this.state.name,
                        email: this.state.email,
                        password: this.state.password,
                        gender: this.state.gender
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
                    alert(response.data.message);
                    this.handleClose(event);

                  }).catch(function (error) {
                    // alert(JSON.stringify(error));
                    alert("Error occured");
                    console.log(error);
                  });

  }


  render() {
    {/*Render nothing if the "show" prop is false*/}
    if(!this.props.show) {
    	{/*alert("dialogue hidden..");*/}
      return null;

    }
	{/*alert("dialogue should pop-up");*/}
	return (
	
		<div id="close" className="modalDialog">
			<div className="modalDialog-div">
				<a href="#close"  onClick={this.handleClose} title="Close" className="close">X</a>
				<h2 className="signupheader-font">Register Here</h2>

            <div className="control-group padding-add2">
                
                <div className="controls">
                    <span className="input-block-level signup-font" >* All Fields Are Required </span>
                </div>
            </div>
			<div className="control-group padding-add2">
                
                <div className="controls">
                    <input className={"input-block-level signup-font name_error-"+this.state.name_error} name="name" id="name" onChange={this.handleInputChange} type="text" value={this.state.name} placeholder="Full Name"/>
                </div>
            </div>
			<div className="control-group padding-add2">
                
                <div className="controls">
                    <input className={"input-block-level signup-font email_error-"+this.state.email_error} name="email" id="email" onChange={this.handleInputChange} type="text" value={this.state.email} placeholder="Email"/>
                </div>
            </div>
            <div className="control-group padding-add2">
                
                <div className="controls">
                    <input className={"input-block-level signup-font password_error-"+this.state.password_error} name="password" id="password"  onChange={this.handleInputChange} type="password" value={this.state.password} placeholder="Password"/>
                </div>
            </div>
            <div className="control-group padding-add2">
                
                <div className="controls">
                    <input className={"input-block-level signup-font confirmpassword_error-"+this.state.confirmpassword_error} name="confirmpassword" id="confirmpassword"  onChange={this.handleInputChange} type="password" value={this.state.confirmpassword} placeholder="Confirm Password"/>
                </div>
            </div>
            <div className="control-group padding-add2">
                
                <div className="controls">
                    <fieldset >
			                <legend className="padding-add8">Gender : &nbsp; &nbsp;
		                        <input type="radio" name="gender" value="male" checked={this.state.gender === 'male'}  onChange={this.handleGenderChange}/><span className=" signup_text-font">Male </span> &nbsp; &nbsp;
		                        <input type="radio" name="gender" value="female" checked={this.state.gender === 'female'}  onChange={this.handleGenderChange} /><span className=" signup_text-font">Female</span>
                            </legend>
			        </fieldset>
                </div>
            </div>
            <div className="control-group padding-add2">
                
                <div className="controls">
                    
                </div>
            </div>
            <div className="control-group">
                
                <div className="controls text-center">
                    <input className="input-block-level signup-font ghost_button_semi-transparent" onClick={this.handleSignup} name="submit-signup" id="submit-signup"  type="button" value="Register" />
                </div>
            </div>
			</div>

		</div>
    );
	
};
	
    
}


{/*
SignupModal.propTypes = {
  onClose: React.PropTypes.func.isRequired,
  show: React.PropTypes.bool,
  children: React.PropTypes.node

};
*/}

export default SignupModal;