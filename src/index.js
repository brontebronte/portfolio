/////////////////////////////////////////////////
//  Main React File (ties react to html file) //
////////////////////////////////////////////////

//////////////////
//   Imports   //
import React from 'react';
import ReactDOM from 'react-dom';
import Name from './Name';
import Menu from './Menu';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import './stylesheet/css/main.css';
import registerServiceWorker from './registerServiceWorker';


////////////////////////////
//   Renders onto html   //
ReactDOM.render(<Name />, document.getElementById('name-react'));
registerServiceWorker();

ReactDOM.render(<Menu />, document.getElementById('menu-react'));
registerServiceWorker();

ReactDOM.render(<About />, document.getElementById('about-react'));
registerServiceWorker();

ReactDOM.render(<Gallery />, document.getElementById('gallery-react'));
registerServiceWorker();

ReactDOM.render(<Contact />, document.getElementById('contact-react'));
registerServiceWorker();
