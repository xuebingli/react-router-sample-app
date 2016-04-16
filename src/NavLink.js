import React from 'react'
import { Link } from 'react-router'

const NavLink = (props) =>
  <Link activeStyle={ styles.active } to={ props.to }>
    { props.children }
  </Link>

const styles = {
  active: {
    color: 'green'
  }
}

export default NavLink
