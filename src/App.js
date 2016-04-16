import React from 'react'
import { Router, Route, hashHistory, Link } from 'react-router'

const Home    = () => <div><h1>Home</h1><Links /></div>
const About   = () => <div><h1>About</h1><Links /></div>
const Contact = () => <div><h1>Contact</h1><Links /></div>

const Links = () =>
  <nav>
    <Link activeStyle={ styles.activeLink } to='/'>Home</Link>
    <Link activeStyle={ styles.activeLink } to='/about'>About</Link>
    <Link activeStyle={ styles.activeLink } to='/contact'>Contact</Link>
  </nav>

const App = () =>
  <Router history={ hashHistory }>
    <Route path="/" component={ Home }></Route>
    <Route path="/about" component={ About }></Route>
    <Route path="/contact" component={ Contact }></Route>
  </Router>

const styles = {
  activeLink: {
    color: 'green'
  }
}

export default App
