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
import sparkleOne from './image/sparkleone.png';
import sparkleTwo from './image/sparkletwo.png';

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
              <p>I am like a sponge waiting to be thrown into the sea.</p>
              <p>A sponge which is wanting to remain afloat, but can't help soaking up the infinite sea of knowledge and challenges life has to offer.</p>
              <p>I am originally from a commercial background, but decided to switch industries as I wanted to be part of a product's creation process.</p>
            </div>
            <div className="about__left"><br />Skills</div>
          </div>
          <div className="about__title">
            <h2 className="about__title--font">about</h2>
            <img className="about__title--image" src={fish} alt="fish with title" />
          </div>
          <div className="about__title-bone">
            <h2 className="about__title--font-bone">skills</h2>
            <img className="about__title--image-bone" src={fishBone} alt="fish bone with title" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
