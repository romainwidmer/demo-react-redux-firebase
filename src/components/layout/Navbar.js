import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import './navbar.css'

class Navbar extends Component {
  handleClick = (e) => {
    e.preventDefault()
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('nav')

    if(burger.classList.contains('active')) {
      burger.classList.remove('active')
      nav.classList.remove('active')
    } else {
      burger.classList.add('active')
      nav.classList.add('active')
    }
  }

  render() {
    return(
      <header>
        <div className="logo"><a href="#">Logo</a></div>
        <nav>
          <ul>
            <SignedInLinks />
            <SignedOutLinks />
          </ul>
        </nav>
        <div className="burger" onClick={this.handleClick}><span></span></div>
      </header>
    )
  }
}

export default Navbar
