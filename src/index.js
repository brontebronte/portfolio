/////////////////////////////////////////////////
//  Main React File (ties react to html file) //
////////////////////////////////////////////////

//////////////////
//   Imports   //
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Name from './Name';
import Menu from './Menu';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import menuData from './menu_data.js';
import allReducers from './reducers';
import './stylesheet/css/main.css';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(allReducers);

////////////////////////////
//   Renders onto html   //
ReactDOM.render(<Name />, document.getElementById('name-react'));
registerServiceWorker();

ReactDOM.render(<Menu data={menuData} />, document.getElementById('menu-react'));
registerServiceWorker();

ReactDOM.render(<About />, document.getElementById('about-react'));
registerServiceWorker();

ReactDOM.render(<Provider store={store}><Gallery /></Provider>, document.getElementById('gallery-react'));
registerServiceWorker();

ReactDOM.render(<Contact />, document.getElementById('contact-react'));
registerServiceWorker();
