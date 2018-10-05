import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = ({handleClickOnTab}) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create' onClick={handleClickOnTab}>New Project</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating blue lighten-1">RW</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks
