import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
import About from './About'
import PhotosContainer from './PhotosContainer'
import PhotoContainer from './PhotoContainer'
import ScrollToTop from './ScrollToTop'

const Home = () => <h1>Home</h1>

const NavLinks = () => (
  <div>
    <NavLink activeClassName="active" exact to="/">
      Home
    </NavLink>{' '}
    <NavLink activeClassName="active" exact to="/photos">
      Photos
    </NavLink>{' '}
    <NavLink activeClassName="active" to="/about">
      About
    </NavLink>{' '}
  </div>
)

const App = () => (
  <Router>
    <ScrollToTop>
      <NavLinks />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/photos/:id" component={PhotoContainer} />
        <Route path="/photos" component={PhotosContainer} />
        <Route render={() => (
          <h1>Page not found</h1>)} />
      </Switch>

      <NavLinks />
    </ScrollToTop>
  </Router>
)

export default App
