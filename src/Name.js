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
        <p className="name__title">brontë</p>
      </div>
    );
  }
}

export default Name;
