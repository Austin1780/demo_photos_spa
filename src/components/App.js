import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom'
import About from './About'

const NavLinks = () => (
  <div className="NavLinks">
    <NavLink activeClassName="active" exact to="/">
      Home
    </NavLink>{' '}
    <NavLink activeClassName="active" to="/photos">
      Photos
    </NavLink>{' '}
    <NavLink activeClassName="active" to="/about">
      About
    </NavLink>
  </div>
)

const App = () => (
  <Router>
    <div>
      <NavLinks />

      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/photos" render={() => <h1>Photos</h1>} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)

export default App
