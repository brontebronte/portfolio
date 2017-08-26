                    ////////////////////
                    //     ABOUT     //
                    ///////////////////

//////////////////
//   Imports   //

// React
import React, { Component } from 'react';

// Images
import fish from './image/fish_blue.svg';
import fishBone from './image/fish_bone.svg';
import hands from './image/hands.svg';
import arrow from './image/about_arrow.svg';
import sparkleOne from './image/sparkleone.png';
import sparkleTwo from './image/sparkletwo.png';
import plate from './image/plate.svg';
import cloudOne from './image/cloud-top.png';
import cloudTwo from './image/cloud-middle.png';
import cloudThree from './image/cloud-lower.png';
import logoSkill from './image/skill_logo.png';


/////////////////////
//   Components   //
class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about__sparkles">
          <img className="about__sparkles--one" src={sparkleOne} alt="sparkle" />
          <img className="about__sparkles--two" src={sparkleTwo} alt="sparkle" />
          <img className="about__sparkles--three" src={sparkleTwo} alt="sparkle" />
        </div>
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
      </div>
    );
  }
}

export default About;
