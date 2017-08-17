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
          <li className="menu-list__item menu-list__item-one">about</li>
          <li className="menu-list__item menu-list__item-two">portfolio</li>
          <li className="menu-list__item menu-list__item-three">contact</li>
        </ul>
        <div className="menu__elevator">
          <img className="menu__elevator--top" src={menuElevator} alt="menu elevator dashboard" />
          <img className="menu__elevator--arrow" src={menuArrow} alt="menu elevator arrow" />
          <div className="menu__elevator--door">
            <img className="menu__elevator--door-one" src={menuDoor} alt="menu elevator door" />
            <img className="menu__elevator--door-two" src={menuDoor} alt="menu elevator door" />
          </div>
          <div className="menu__elevator--gear">
            <img className="menu__elevator--gear-one" src={menuDoorGear} alt="menu elevator door gear" />
            <img className="menu__elevator--gear-two" src={menuDoorGear} alt="menu elevator door gear" />
            <img className="menu__elevator--gear-three" src={menuDoorGear} alt="menu elevator door gear" />
          </div>
          <p className="menu__elevator--job-title">Front End Developer</p>
        </div>
      </div>
    );
  }
}

export default Menu;
