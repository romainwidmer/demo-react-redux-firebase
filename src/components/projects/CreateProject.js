import React, { Component } from 'react'
import '../forms/form.css'
import { connect } from 'react-redux'
import { createProject } from '../../redux/actions/projectAction'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createProject(this.state)
    this.props.history.push('/')
  }

  render() {
    const { auth } = this.props

    if(!auth.uid) return <Redirect to='/signin' />

    return(
      <div className="container box">
        <h5 className="white-text text-darken-3">Create New Project</h5>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id='title' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <textarea className="materialize-textarea" id='content' onChange={this.handleChange} ></textarea>
            <label htmlFor="content">Content</label>
          </div>
          <div className="input-field">
            <button className="btn blue lighten-1 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)


/*
let data = {
  title: 'Create new project',
  input: [
    {inputType: 'input', type: 'email', value: 'email'},
    {inputType: 'input', type: 'password', value: 'password'},
    {inputType: 'input', type: 'text', value: 'content'},
    {inputType: 'textarea', type: 'text', value: 'test'},
    {inputType: 'button', value: 'Create'}
  ]
}

<Form data={data} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
*/
