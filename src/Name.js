                    ////////////////////
                    //      NAME      //
                    ///////////////////

//////////////////
//   Imports   //

// React
import React, { Component } from 'react';


// Images
import logo from './image/logo.svg'


// CSS
import './stylesheet/css/name.css';



/////////////////////
//   Components   //
class Name extends Component {
  render() {
    return (
      <div className="name">
        <img className="name__logo" src={logo} alt="logo" />
        <h1 className="name__title">BRONTË</h1>
      </div>
    );
  }
}

export default Name;
