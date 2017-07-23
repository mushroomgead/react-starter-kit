// import _ from 'lodash';
// import './style.scss';
// import App from './App.jsx';
//
// function component() {
//   var element = document.createElement('div');
//
//   element.innerHTML = _.join(['Hello', 'webpack'], '');
//
//   return element;
// }
//
// document.body.appendChild(component());

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(<App />, document.getElementById('root'));
