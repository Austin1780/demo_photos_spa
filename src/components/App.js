import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom'
import About from './About'
import PhotosContainer from './PhotosContainer'

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

      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/photos" component={PhotosContainer} />
        <Route path="/about" component={About} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </div>
  </Router>
)

export default App
