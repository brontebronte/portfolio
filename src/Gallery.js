                    ////////////////////
                    //   PORTFOLIO   //
                    ///////////////////

//////////////////
//   Imports   //

// React
import React, { Component } from 'react';

// Images
import milk from './image/milkcarton.svg';

// Variables
var galleryVar = [
  {
    galleryId: 1,
    galleryName:'Google Map API',
    galleryDescription:'Project which includes Google API, Foursquare API and Knockout JS, part of Udacity',
    galleryPic: require('./image/project_pic/googlemap.png'),
    galleryUrl: './projects/google_map/index.html'
  },
  {
    galleryId: 2,
    galleryName:'Feed Reader',
    galleryDescription:'Utilizing Jasmine, as part of Udacity course',
    galleryPic: require('./image/project_pic/jasmine.png'),
    galleryUrl: './projects/feed_reader/index.html'
  },
  {
    galleryId: 3,
    galleryName:'Web Optimization',
    galleryDescription:'Optimizing web given by Udacity, utilizing google developer tool and Gulp',
    galleryPic: require('./image/project_pic/weboptimize.png'),
    galleryUrl: './projects/web_op/views/pizza.html'
  },
  {
    galleryId: 4,
    galleryName:'Frogger Game Arcade	',
    galleryDescription:'Utilizes Javascript Object Orientated Programming',
    galleryPic: require('./image/project_pic/gamearcade.png'),
    galleryUrl: './projects/arcade/index.html'
  }
]

/////////////////////
//   Components   //

// main centre for all components to connect to
class Gallery extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gallery">
        <h2 className="gallery__title">gallery</h2>
        <img className="gallery__milk" src={milk} alt="milk carton" />
        <div className="gallery__preview">
          <SearchGallery />
            <main className="gallery__list">
              <ProjectList />
              <ViewGallery />
            </main>
        </div>
      </div>
    );
  }
}

// Append list of projects onto the gallery, just mini pic and title
class ProjectList extends Component {
    constructor(props) {
      super(props);

      // ties objects from galleryVar to this.state
      this.state = {
        galleryVar
      };
    }

    render() {
      return (
        <div className="gallery__preview--projects">
          {this.state.galleryVar.map((galleryVar, index) =>
            <li className="gallery__preview--group" key={galleryVar.galleryId}>
              <img className="gallery__preview--group-pic" src={galleryVar.galleryPic} alt="project preview" />
              <h4 className="gallery__preview--group-name">{galleryVar.galleryName}</h4>
            </li>
          )}
        </div>
      )
    }

}


// search input to filter project gallery list
class SearchGallery extends Component {

  filterUpdate(){
    // connects to input via ref, value refers to whatever is typed
    // onChange allows, upon key down the function will execute
    const val = this.myValue.value;
    console.log(val);
  }

  render() {
    return (
      <form className="gallery__preview--search">
        <input
          className="gallery__preview--search-input"
          type="search"
          placeholder="Search Project..."
          ref={(value) => {this.myValue = value}}
          onChange={this.filterUpdate.bind(this)}
        />
      </form>
    )
  }
}


// big view, with description, link of project to project title, when project list is clicked
class ViewGallery extends Component {
  render() {
    return (
      <div className="gallery__preview--view"></div>
    )
  }
}


export default Gallery;
