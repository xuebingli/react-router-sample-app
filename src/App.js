import React from 'react'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

const Outer = (props) =>
  <div>
    <h1>My Website</h1>
    <NavBar />
    { props.children }
  </div>

const About = () => <div><h1>About</h1></div>

const Contact = () => <div><h1>Contact</h1></div>

const NavBar = () =>
  <nav>
    <Link to='/'>About</Link>
    <Link to='/contact'>Contact</Link>
  </nav>

const App = () =>
  <Router history={ hashHistory }>
    <Route path="/" component={ Outer }>
      <IndexRoute component={ About }></IndexRoute>
      <Route path="contact" component={ Contact }></Route>
    </Route>
  </Router>

export default App
