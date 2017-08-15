import React, { Component } from 'react';
import logo from './image/logo.svg';

class Name extends Component {
  render() {
    return (
      <div className="name">
        <img src={logo} className="name__logo" alt="logo" />
        <h2 className="name__title">BRONTË</h2>
      </div>
    );
  }
}

export default Name;
