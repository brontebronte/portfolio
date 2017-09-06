                    ////////////////////
                    //   PORTFOLIO   //
                    ///////////////////

//////////////////
//   Imports   //

// React
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { displayProject } from './actions/index.js';


/////////////////////
//   Components   //

// main centre for all components to connect to
class Gallery extends Component {

  constructor(props) {
    super(props)
    this.state = {
      //current status
      filterText: '',
    }
  }

  // Gallery Method: update search input value
  filterUpdate(value) {
    this.setState({
      filterText: value
    });
  }



  render() {

    return (
      <div id="gallery">
        <h2 className="gallery__title">gallery</h2>
        <div className="gallery__preview">
          <SearchGallery
            filterText={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}
          />
          <main className="gallery__list">
            <GalleryProjects
              projects={this.props.projects}
              filterText={this.state.filterText}
              fullView={this.props.displayProject}
            />
            <ViewGallery
              projects={this.props.projects}
              active={this.props.active}
            />
          </main>
        </div>
      </div>
    );
  }
}


// append project onto gallery
class GalleryProjects extends Component {
  render() {
    // grabs properties from main component which is linked to project_data.js, linked and imported in index.js
    const { projects, filterText, fullView } = this.props;

    const galleryList = projects
      .filter(galleryProject => {
        //remove projects that do not match current filter text
        return (galleryProject.galleryName.toLowerCase().indexOf(filterText.toLowerCase()) >= 0)
      })
      .map(galleryProject => {
        //pretty much loops through the objects to append
        return (
          <li className="gallery__preview--group" key={galleryProject.galleryName} onClick={() => fullView(galleryProject)}>
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

  filterUpdate(){
    // connects to input via ref, value refers to whatever is typed
    // onChange allows, upon key down the function will execute
    const val = this.myValue.value;
    // this refers to the filterUpdate function on main Gallery component
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
    const {projects, active} = this.props;

    if(!active) {
      return (
        <div className="gallery__preview--view">
          <h3 className="gallery__preview--view-title">{projects[0].galleryName}</h3>
          <img className="gallery__preview--view-pic" src={projects[0].galleryPic} alt="project snapshot"/>
          <div className="gallery__preview--view-description">
            <p className="gallery__preview--view-description-sentence">{projects[0].galleryDescription}</p>
            <br />
            <a className="gallery__preview--view-description-link" href={projects[0].galleryUrl}>View</a>
          </div>
        </div>
      )
    }
    return (
      <div className="gallery__preview--view">
        <h3 className="gallery__preview--view-title">{active.galleryName}</h3>
        <img className="gallery__preview--view-pic" src={active.galleryPic} alt="project snapshot"/>
        <div className="gallery__preview--view-description">
          <p className="gallery__preview--view-description-sentence">{active.galleryDescription}</p>
          <br />
          <a className="gallery__preview--view-description-link" href={active.galleryUrl}>View</a>
        </div>
      </div>
    )
  }
}


// Functions for Redux
function mapStatetoProps(state) {
  return {
    projects: state.projects,
    active: state.active
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({displayProject: displayProject}, dispatch)
}

export default connect(mapStatetoProps, matchDispatchToProps)(Gallery);
