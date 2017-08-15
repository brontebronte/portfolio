import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul className="menu-list">
          <li className="menu-list__item">about</li>
          <li className="menu-list__item">portfolio</li>
          <li className="menu-list__item">contact</li>
        </ul>
      </div>
    );
  }
}

export default Menu;
