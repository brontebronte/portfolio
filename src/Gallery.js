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

// main centre for all components to connect to
class Gallery extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filterText: ''
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    });
  }

  render() {

    return (
      <div className="gallery">
        <h2 className="gallery__title">gallery</h2>
        <img className="gallery__milk" src={milk} alt="milk carton" />
        <div className="gallery__preview">
          <SearchGallery
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
          />
          <main className="gallery__list">
            <GalleryProjects
            data={this.props.data}
            filterText={this.state.filterText}
            />
            <ViewGallery />
          </main>
        </div>
      </div>
    );
  }
}


// append project onto gallery
class GalleryProjects extends Component {
  render() {
    const { data, filterText } = this.props;

    const galleryList = data
      .filter(galleryProject => {
        //remove projects that do not match current filter text
        return (galleryProject.galleryName.toLowerCase().indexOf(filterText.toLowerCase()) >= 0)
      })
      .map(galleryProject => {
        //pretty much loops through the objects to append
        return (
          <li className="gallery__preview--group" key={galleryProject.galleryId}>
            <img className="gallery__preview--group-pic" src={galleryProject.galleryPic} alt='projects done' />
            <h4 className="gallery__preview--group-name">{galleryProject.galleryName}</h4>
          </li>
        )
      })

    return (
      <ul className="gallery__preview--projects">
        {galleryList}
      </ul>
    );
  }
}


// search input to filter project gallery list
class SearchGallery extends Component {

  filterUpdate(e){
    // connects to input via ref, value refers to whatever is typed
    // onChange allows, upon key down the function will execute
    const val = this.myValue.value;
    this.props.filterUpdate(val)
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
