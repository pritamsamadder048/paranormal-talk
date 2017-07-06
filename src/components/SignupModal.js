import React from 'react';
import ReactDOM from 'react-dom';
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
		gender:''
		
	};
	this.handleInputChange=this.handleInputChange.bind(this);
    }

   handleInputChange(event){

	const target=event.target;
	    const value=target.value;
	    const name=target.name;

	    this.setState({
	      [name]:value
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
				<a href="#close"  onClick={this.props.onClose} title="Close" className="close">X</a>
				<h2 className="signupheader-font">Register Here</h2>

			<div className="control-group">
                
                <div className="controls">
                    <input className="input-block-level signup-font" name="name" id="name" onChange={this.handleInputChange} type="text" value={this.state.name} placeholder="Full Name"/>
                </div>
            </div>
			<div className="control-group">
                
                <div className="controls">
                    <input className="input-block-level signup-font" name="email" id="email" onChange={this.handleInputChange} type="text" value={this.state.email} placeholder="Email"/>
                </div>
            </div>
            <div className="control-group">
                
                <div className="controls">
                    <input className="input-block-level signup-font" name="password" id="password"  onChange={this.handleInputChange} type="password" value={this.state.password} placeholder="Password"/>
                </div>
            </div>
            <div className="control-group">
                
                <div className="controls">
                    <input className="input-block-level signup-font" name="confirmpassword" id="confirmpassword"  onChange={this.handleInputChange} type="password" value={this.state.confirmpassword} placeholder="Confirm Password"/>
                </div>
            </div>
            <div className="control-group">
                
                <div className="controls">
                    <fieldset >
			                <legend className="padding-add8">Gender : &nbsp; &nbsp;
		                        <input type="radio" name="gender" value="Male" /><span className=" signup_text-font">Male </span> &nbsp; &nbsp;
		                        <input type="radio" name="gender" value="Female" /><span className=" signup_text-font">Female</span>
                            </legend>
			        </fieldset>
                </div>
            </div>
            <div className="control-group">
                
                <div className="controls">
                    <input className="input-block-level signup-font ghost_button_semi-transparent" name="submit-signup" id="submit-signup"  type="button" value="Register" />
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