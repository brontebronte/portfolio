                    ////////////////////
                    //   PORTFOLIO   //
                    ///////////////////

//////////////////
//   Imports   //

// React
import React, { Component } from 'react';

// Images
import milk from './image/milkcarton.svg';


/////////////////////
//   Components   //
class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <h2 className="gallery__title">gallery</h2>
        <img className="gallery__milk" src={milk} alt="milk carton" />
      </div>
    );
  }
}

export default Gallery;
