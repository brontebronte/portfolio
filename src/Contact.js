////////////////////
//     ABOUT     //
///////////////////

//////////////////
//   Imports   //

// React
import React, { Component } from 'react';

// Images
import mailbox from './image/postbox.svg';


/////////////////////
//   Components   //
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h2 className="contact__title">contact</h2>
        <img className="contact__mailbox" src={mailbox} alt="mailbox" />
      </div>
    );
  }
}

export default Contact;
