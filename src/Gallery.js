                    ////////////////////
                    //   PORTFOLIO   //
                    ///////////////////

//////////////////
//   Imports   //

// React
import React, { Component } from 'react';

// Images
import plate from './image/plate.svg'
import fish from './image/fish_blue.svg'


/////////////////////
//   Components   //
class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <h2 className="portfolio__title">gallery</h2>
        <img className="portfolio__fish" src={fish} alt="blue fish" />
      </div>
    );
  }
}

export default Portfolio;
