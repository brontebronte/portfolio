////////////////////
//     ABOUT     //
///////////////////

//////////////////
//   Imports   //

// React
import React, { Component } from 'react';

// Images
import mailbox from './image/postbox.svg';
import bunny from './image/bunny.svg'

/////////////////////
//   Components   //
class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <div className="contact__circle-one"></div>
        <div className="contact__circle-two"></div>
        <div className="contact__circle-three"></div>
        <div className="contact__letter--email">bronte.bronte.20@gmail.com</div>
        <h2 className="contact__title">contact</h2>
        <img className="contact__mailbox" src={mailbox} alt="mailbox" />
        <img className="contact__bunny" src={bunny} alt="bunny" />
      </div>
    );
  }
}

export default Contact;
