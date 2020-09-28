import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="AS Profile Pic"
            />
          </div>
          <div className="nine columns aboutme__col">
            <h2>About Me</h2>

            <p>
              My name is Amrit, a hardworking individual who thoroughly enjoys
              helping people through the help of software. Friendly, easy to get
              along with & dedicated to learn, acheive and build up my skillset
              in the field I am most passionate about.
            </p>
            <div className="row">
              <div className="columns contact__details">
                <h2>Contact Details</h2>
                <span>Amrit Singh</span>
                <br />
                <span>(+44) 7445276905</span>
                <br />
                <span>amrit.09@hotmail.co.uk</span>
              </div>
              <div className="columns download__resume">
                <p>
                  <a href={resumeDownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
