                    ////////////////////
                    //      MENU      //
                    ///////////////////

//////////////////
//   Imports   //

// React
import React, { Component } from 'react';

// Images
import menuElevator from './image/elevator_master.svg';
import menuArrow from './image/arrow.svg';
import menuDoor from './image/elevator_door.svg';
import menuDoorGear from './image/elevator_gear.svg';


/////////////////////
//   Components   //
class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul className="menu-list">
          <li className="menu-list__item">about</li>
          <li className="menu-list__item">portfolio</li>
          <li className="menu-list__item">contact</li>
        </ul>
        <img className="menu__elevator" src={menuElevator} alt="menu elevator dashboard" />
        <img className="menu__arrow" src={menuArrow} alt="menu elevator arrow" />
        <div className="menu__door">
          <img className="menu__door--one" src={menuDoor} alt="menu elevator door" />
          <img className="menu__door--two" src={menuDoor} alt="menu elevator door" />
        </div>
        <div className="menu__gear">
          <img className="menu__gear--one" src={menuDoorGear} alt="menu elevator door gear" />
          <img className="menu__gear--two" src={menuDoorGear} alt="menu elevator door gear" />
          <img className="menu__gear--three" src={menuDoorGear} alt="menu elevator door gear" />
        </div>
      </div>
    );
  }
}

export default Menu;
