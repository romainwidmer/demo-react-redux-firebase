import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import './navbar.css'

class Navbar extends Component {
  handleBurgerToggle = (e) => {
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

  handleClickOnTab = (e) => {
    const nav = document.querySelector('nav')
    const burger = document.querySelector('.burger')

    if(nav.classList.contains('active')) {
      nav.classList.remove('active')
      burger.classList.remove('active')
    }
  }

  render() {
    return(
      <header>
        <div className="container nav-wrapper">  
          <div className="logo"><Link to="/">Demo React-Redux-Firebase</Link></div>
          <nav>
            <ul>
              <SignedOutLinks />
              <SignedInLinks handleClickOnTab={this.handleClickOnTab} />
            </ul>
          </nav>
          <div className="burger" onClick={this.handleBurgerToggle}><span></span></div>
        </div>
      </header>
    )
  }
}

export default Navbar
