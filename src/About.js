                    ////////////////////
                    //     ABOUT     //
                    ///////////////////

//////////////////
//   Imports   //

// React
import React, { Component } from 'react';

// Images
import profilePic from './image/milkcarton.svg';
import sparkleOne from './image/sparkleone.png';
import sparkleTwo from './image/sparkletwo.png';
import sparkleThree from './image/sparklethree.png';
import sparkleFour from './image/sparklefour.png';

/////////////////////
//   Components   //
class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about__sparkles">
          <img className="about__sparkles--one" src={sparkleOne} alt="sparkle" />
          <img className="about__sparkles--two" src={sparkleTwo} alt="sparkle" />
          <img className="about__sparkles--three" src={sparkleThree} alt="sparkle" />
          <img className="about__sparkles--four" src={sparkleFour} alt="sparkle" />
        </div>
        <div className="about__hover-me">
          <p className="about__hover-me--instruction">hover me</p>
        </div>
        <div className="about__milkcarton">
          <h2 className="about__milkcarton--title">about</h2>
          <img className="about__milkcarton--profile-pic" src={profilePic} alt="profile on milk carton" />
        </div>
        <div className="about__context">
        " I am like a sponge waiting to be thrown into the sea. A sponge which is wanting to remain afloat, but can't help soaking up the infinite sea of knowledge and challenges life has to offer. I am originally from a commercial background, but decided to switch industries as I wanted to be part of a product's creation process. "
        </div>
      </div>
    );
  }
}

export default About;
