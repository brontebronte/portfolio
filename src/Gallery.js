                    ////////////////////
                    //   PORTFOLIO   //
                    ///////////////////

//////////////////
//   Imports   //

// React
import React, { Component } from 'react';

// Images
import fish from './image/fish_blue.svg';


/////////////////////
//   Components   //
class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <h2 className="gallery__title">gallery</h2>
        <img className="gallery__fish" src={fish} alt="blue fish" />
      </div>
    );
  }
}

export default Gallery;
