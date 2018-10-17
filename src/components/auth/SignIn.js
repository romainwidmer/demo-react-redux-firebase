import React, { Component } from 'react'
import '../forms/form.css'
import { connect } from 'react-redux'
import { signIn } from '../../redux/actions/authActions'
import { Redirect } from 'react-router-dom'


class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }

  render() {
    const { authError, auth } = this.props

    if(auth.uid) return <Redirect to='/' />

    return (
      <div className="container box">
        <h5 className="white-text text-darken-3">Sign In</h5>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (msCredentials) => dispatch(signIn(msCredentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
