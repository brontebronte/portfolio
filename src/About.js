                    ////////////////////
                    //     ABOUT     //
                    ///////////////////

//////////////////
//   Imports   //

// React
import React, { Component } from 'react';


// Images
import fish from './dest/mini-image/fish_blue.svg';
import fishBone from './dest/mini-image/fish_bone.svg';
import hands from './dest/mini-image/hands.svg';
import arrow from './dest/mini-image/about_arrow.svg';
import plate from './dest/mini-image/plate.svg';
import cloudOne from './dest/mini-image/cloud-top-medium.png';
import cloudTwo from './dest/mini-image/cloud-middle-medium.png';
import cloudThree from './dest/mini-image/cloud-lower-medium.png';
import logoSkill from './dest/mini-image/skill_logo-medium.png';
import light from './dest/mini-image/light.svg';


/////////////////////
//   Components   //
class About extends Component {
  render() {
    return (
      <div id="about">
        <div className="about__container">
          <div className="about__box">
            <div className="about__front"><br />
              <p className="about__front--one">I am like a sponge waiting to be thrown into the sea.</p>
              <p className="about__front--two">A sponge which is wanting to remain afloat, but can't help soaking up the infinite sea of knowledge and challenges life has to offer.</p>
              <p className="about__front--three">I am originally from a commercial background, but decided to switch industries as I wanted to be part of a product's creation process.</p>
            </div>
            <div className="about__left"><br />
              <img className="about__left-logo" src={logoSkill} alt="logos of code language or frameworks etc" />
            </div>
          </div>
          <img className="about__hands" src={hands} alt="hands" />
          <div className="about__hover">
            <img className="about__arrow" src={arrow} alt="arrow to hover" />
          </div>
          <div className="about__title">
            <h2 className="about__title--font">about</h2>
            <img className="about__title--image" src={fish} alt="fish with title" />
          </div>
          <div className="about__title-bone">
            <h2 className="about__title--font-bone">skills</h2>
            <img className="about__title--image-bone" src={fishBone} alt="fish bone with title" />
          </div>
          <img className="about__plate" src={plate} alt="plate" />
          <img className="about__cloud-one" src={cloudOne} alt="cloud" />
          <img className="about__cloud-two" src={cloudTwo} alt="cloud" />
          <img className="about__cloud-three" src={cloudThree} alt="cloud" />
        </div>
        <div className="about__light">
          <div className="about__light--wire"></div>
          <img className="about__light--bulb" src={light} alt="light bulb" />
          <div className="about__light--shine"></div>
        </div>
      </div>
    );
  }
}

export default About;
