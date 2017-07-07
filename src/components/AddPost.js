import React, { Component } from 'react';
import axios from 'axios';
import Qs from "qs";
import './SignupLogin.css';
import SignupModal from './SignupModal';
import './SignupModal.css';
import './Post.css';



class AddPost extends Component {
  
  constructor(props){
    super(props);
    };
  render()
  {
    return(
      <div>
         <form action="#" method="post" enctype="multipart/form-data" className="facebook-share-box">
                <div className="share_cancel">
                  <div className="panel panel-default">
                                <div className="panel-heading"><i className="fa fa-file"></i> Update Status</div>
                                <div className="panel-body">
                                  <div className="">
                                      <textarea name="message" id="status_message" className="form-control message" placeholder="What's on your mind ?"></textarea> 
                                  </div>
                                </div>
                      <div className="panel-footer">
                        <div className="row">
                          <div className="col-md-7">
                            <div className="form-group">
                              <div className="btn-group">
                                <button type="button" className="btn btn-default"><i className="icon icon-map-marker"></i> Location</button>
                                <button type="button" className="btn btn-default"><i className="icon icon-picture"></i> Photo</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="form-group">
                              <select name="privacy" className="form-control privacy-dropdown pull-left input-sm">
                                <option value="1" selected="selected">Public</option>
                                <option value="2">Only my friends</option>
                                <option value="3">Only me</option>
                              </select>                                    
                              <input type="submit" name="submit" value="Post" className="btn btn-primary"/>                               
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
          </form>
      </div>
    );
  }

  }



export default AddPost;


