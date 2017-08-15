                    ////////////////////
                    //     ABOUT     //
                    ///////////////////

//////////////////
//   Imports   //

// React
import React, { Component } from 'react';

// Images
import profilePic from './image/milkcarton.svg';


/////////////////////
//   Components   //
class About extends Component {
  render() {
    return (
      <div className="about">
        <h2 className="about__title">about</h2>
        <img className="about__profile-pic" src={profilePic} alt="profile picture on milk carton" />
        <p className="about__context">
        " I am like a sponge waiting to be thrown into the sea. A sponge which is wanting to remain afloat, but can't help soaking up the infinite sea of knowledge and challenges life has to offer. I am originally from a commercial background, but decided to switch industries as I wanted to be part of a product's creation process. "
        </p>
      </div>
    );
  }
}

export default About;
