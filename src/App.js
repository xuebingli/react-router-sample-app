import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import NavLink from './NavLink'

const Home    = () => <div><h1>Home</h1><Links /></div>
const About   = () => <div><h1>About</h1><Links /></div>
const Contact = () => <div><h1>Contact</h1><Links /></div>

const Links = () =>
  <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About</NavLink>
    <NavLink to='/contact'>Contact</NavLink>
  </nav>

const App = () =>
  <Router history={ hashHistory }>
    <Route path="/" component={ Home }></Route>
    <Route path="/about" component={ About }></Route>
    <Route path="/contact" component={ Contact }></Route>
  </Router>

export default App
