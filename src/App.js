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

const users = [
  { name: 'Mark' },
  { name: 'Maren' },
  { name: 'Lauren' }
] 

const UsersPage = () => {
  return (
    <div>
      <h3>Users Page</h3>
      { 
        users.map((user, index) => {
          return (
            <h5 key={ index }>
              <Link to={ `/user/${index}` }>{ user.name }'s Page</Link>
            </h5>
          )
        })
      }
    </div>
  )
}

const UserPage = ({ match }) => {
  const { params: { userId } } = match;
  return(
    <div>
      <p>User ID: { userId }</p>
      <p>User Name: { users[userId].name }</p>
    </div>
  )
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
                <li><Link to="/users">Users</Link></li>
              </ul>
            </nav>

            <Route exact path="/" component={ Home } /> 
            <Route path="/about" component={ About } />
            <Route path="/store" component={ Store } />
            <Route path="/users" component={ UsersPage } />

            <Route path="/user/:userId" component={ UserPage }/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;