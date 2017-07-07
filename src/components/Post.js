import React, { Component } from 'react';
import axios from 'axios';
import Qs from "qs";
import './SignupLogin.css';
import SignupModal from './SignupModal';
import './SignupModal.css';
import Base from './Base';
import AddPost from './AddPost';
import './Post.css'



class Post extends Component {
	
	constructor(props){
    super(props);
    };
  render()
  {
    return(
      <div>
          <Base>
            <div id ="updatestatus" className="TextCenter padding-add20 col-md-6 col-md-offset-3">
              <AddPost/>
            </div>
          </Base>
      </div>
    )
  }

  }



export default Post;
