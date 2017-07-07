import React, { Component } from 'react';
import * as screenfull from 'screenfull';
import SignupLogin from './SignupLogin';




class Home extends Component {
	
	constructor(props){
    super(props);
    };
	
  handleFullScreen(event)
  {
    event.preventDefault();
    {/*alert("trying to go full-screen");*/}
	{/*document.toggleFullScreen();*/}
	if (screenfull.enabled) {
		{/*alert("can be full screen");*/}
            screenfull.toggle();
	}
  }

	
  render()
  {
    return(
  
      <div>
      
		<nav className="social-nav">
			<ul>
				<li><a href="#"><img src="images/icon-facebook.png" /></a></li>
				<li><a href="#"><img src="images/icon-twitter.png" /></a></li>
				<li><a href="#"><img src="images/icon-google.png" /></a></li>
				<li><a href="#"><img src="images/icon-dribbble.png" /></a></li>
				<li><a href="#"><img src="images/icon-linkedin.png" /></a></li>
				<li><a href="#"><img src="images/icon-pinterest.png" /></a></li>
			</ul>
		</nav>
		<button className="full-screen" onClick={this.handleFullScreen}></button>

		<div id="logo">Paranormal Talk</div>

		<nav className="main-nav">
			<ul>
				<li><a href="#home" className="active">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#contact">Contact</a></li>
				<li><a href="#signuplogin">Signup and Login</a></li>
			</ul>
		</nav>

		<a href="" id="arrow_left"><img src="images/arrow-left.png" alt="Slide Left" /></a>
		<a href="" id="arrow_right"><img src="images/arrow-right.png" alt="Slide Right" /></a>

		<section className="content show Template-left " id="home">
			<h1>Welcome</h1>
			<h5>Halloween is Near!</h5>
			<p>Greetings, We Welcome you to world of Paranormal. This Site will be a gathering place for paranormal lovers. If You Love paranormal things or if you are a professional paranormal investigator, please join us and share what you love and see what others are doing.</p>
			<p><a href="#about">More info &#187;</a></p>
		</section>

		<section className="content hide" id="about">
			<h1>About</h1>
			<h5>Here's a little about what we're up to.</h5>
			<p>Besides This paranormal Social website we peovide free counselling for paranormal victims and also provide free resarch for the haunting.So if you feel like you have anything to share or you feel like you are in danger because of paranormal.please contact us.</p>
			<p><a href="https://twitter.com/paranormaltalki" target="blank">Follow our updates on Twitter</a></p>
		</section>

		<section className="content hide" id="contact">
			<h1>Contact</h1>
			<h5>Get in touch.</h5>
			<p>Email: <a href="#">paranormaltalkinfinity@gmail.com</a><br />
				Phone: +91 8961381702<br /></p>
			<p>Kolkata, Westbengal<br />
				India</p>
		</section>
		
		<section className="content hide"id="signuplogin">
		    <SignupLogin/>
		</section>
		
		
		<div id="maximage">
			<div>
				<img src="images/backgrounds/bg-img-1.jpg" alt="" />
				<img className="gradient" src="images/backgrounds/gradient.png" alt="" />
			</div>
			<div>
				<img src="images/backgrounds/bg-img-2.jpg" alt="" />
				<img className="gradient" src="images/backgrounds/gradient.png" alt="" />
			</div>
			<div>
				<img src="images/backgrounds/bg-img-3.jpg" alt="" />
				<img className="gradient" src="images/backgrounds/gradient.png" alt="" />
			</div>
			<div>
				<img src="images/backgrounds/bg-img-4.jpg" alt="" />
				<img className="gradient" src="images/backgrounds/gradient.png" alt="" />
			</div>
			<div>
				<img src="images/backgrounds/bg-img-5.jpg" alt="" />
				<img className="gradient" src="images/backgrounds/gradient.png" alt="" />
			</div>
		</div>
		
		
      </div>
    )
  }

  }



export default Home;