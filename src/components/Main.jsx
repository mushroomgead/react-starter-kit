import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';

const Main = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/page1' component={Page1} />
      <Route path='/page2' component={Page2} />
      <ul>
        <li><Link to='page1' />Page1</li>
        <li><Link to='page2' />Page2</li>
      </ul>
    </div>
  </Router>
)

export default Main;
