                    ////////////////////
                    //      NAME      //
                    ///////////////////

//////////////////
//   Imports   //

// React
import React, { Component } from 'react';

// Images
import logo from './image/logo.svg'


/////////////////////
//   Components   //
class Name extends Component {
  render() {
    return (
      <div className="name">
        <img className="name__logo" src={logo} alt="logo" />
        <h2 className="name__title">BRONTË</h2>
      </div>
    );
  }
}

export default Name;
