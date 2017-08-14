/////////////////////////////////////////////////
//  Main React File (ties react to html file) //
////////////////////////////////////////////////

//////////////////
//   Imports   //
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


////////////////////////////
//   Renders onto html   //
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
