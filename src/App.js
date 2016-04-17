import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import NavLink from './NavLink'

const Home = (props) =>
  <div>
    <h1>Home</h1>
    <Links />
    { props.children }
  </div>

const About = (props) =>
  <div>
    <h1>About</h1>
    { props.children }
  </div>

const Contact = () => <div><h1>Contact</h1></div>

const Links = () =>
  <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/about/contact'>Contact</NavLink>
  </nav>

const App = () =>
  <Router history={ hashHistory }>
    <Route path="/" component={ Home }>
      <Route path="about" component={ About }>
        <Route path="contact" component={ Contact }></Route>
      </Route>
    </Route>
  </Router>

export default App
