import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

class Home extends Component {
  render() {
    return (
      <h2>Home</h2>
    )
  }
}

class About extends Component {
  render() {
    return (
      <h2>About</h2>
    )
  }
}

class Store extends Component {
  render() {
    return (
      <h2>Store</h2>
    )
  }
}

class App extends Component {
  constructor() {
    super()
  } 
// The "exact" in the routing option for Home is needed because the slash is included in all of the Routes so you need to specify so it doesnt display Home always.
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/store">Store</Link></li>
              </ul>
            </nav>

            <Route exact path="/" component={ Home } /> 
            <Route path="/about" component={ About } />
            <Route path="/store" component={ Store } />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;