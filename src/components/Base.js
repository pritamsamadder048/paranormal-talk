import React, { Component } from 'react';
import * as screenfull from 'screenfull';
import axios from 'axios';
import Qs from "qs";
import './SignupLogin.css';
import SignupModal from './SignupModal';
import './SignupModal.css';
import './Post.css';




class Base extends Component {
  
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


                 <div id="basechild">
                    {this.props.children}
                 </div>


            <a href="" id="arrow_left"><img src="images/arrow-left.png" alt="Slide Left" /></a>
            <a href="" id="arrow_right"><img src="images/arrow-right.png" alt="Slide Right" /></a>
            
            
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
    );
  }

  }


  export default Base;