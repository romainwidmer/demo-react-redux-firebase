import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import './navbar.css'
import { connect } from 'react-redux'


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

  render() {
    const { auth } = this.props
    console.log(auth)
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />

    return(
      <header>
        <div className="container nav-wrapper">  
          <div className="logo"><Link to="/">Demo React-Redux-Firebase</Link></div>
          <nav>
            <ul>
              {links}
            </ul>
          </nav>
          <div className="burger" onClick={this.handleBurgerToggle}><span></span></div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, null)(Navbar)
