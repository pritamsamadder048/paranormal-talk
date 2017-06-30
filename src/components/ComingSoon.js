import React, { Component } from 'react';
import * as screenfull from 'screenfull';




class ComingSoon extends Component {
	
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
	  {/*Social Links */}
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
 
		{/*Switch to full screen */}
		<button className="full-screen" onClick={this.handleFullScreen}></button>

		{/*Site Logo*/}
		<div id="logo">Paranormal Talk</div>

		{/*Main Navigation */}
		<nav className="main-nav">
			<ul>
				<li><a href="#home" className="active">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>

		{/*Slider Controls */}
		<a href="" id="arrow_left"><img src="images/arrow-left.png" alt="Slide Left" /></a>
		<a href="" id="arrow_right"><img src="images/arrow-right.png" alt="Slide Right" /></a>

		{/*Home Page*/}
		<section className="content show Template-left " id="home">
			<h1>Welcome</h1>
			<h5>Our new site is coming soon!</h5>
			<p>Greetings, We Welcome you to world of Paranormal. This Site will be a gathering place for paranormal lovers. If You Love paranormal things or if you are a professional paranormal investigator, please join us and share what you love and see what others are doing.</p>
			<p><a href="#about">More info &#187;</a></p>
		</section>

		{/*About Page */}
		<section className="content hide" id="about">
			<h1>About</h1>
			<h5>Here's a little about what we're up to.</h5>
			<p>Nullam quis arcu a elit feugiat congue nec non orci. Pellentesque feugiat bibendum placerat. Nullam eu massa in ipsum varius laoreet. Ut tristique pretium egestas. Sed sed velit dolor. Nam rhoncus euismod lorem, id placerat ipsum placerat nec. Mauris ut eros a ligula tristique lacinia non blandit metus. Sed vitae velit lorem, et scelerisque diam.</p>
			<p><a href="#">Follow our updates on Twitter</a></p>
		</section>

		{/* Contact Page */}   
		<section className="content hide" id="contact">
			<h1>Contact</h1>
			<h5>Get in touch.</h5>
			<p>Email: <a href="#">info@avenir.com</a><br />
				Phone: 123.456.7890<br /></p>
			<p>123 East Main<br />
				New York, NY 12345</p>
		</section>
		
		{/*  Background Slides*/} 
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



export default ComingSoon;