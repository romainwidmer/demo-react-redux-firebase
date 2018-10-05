import React from 'react'
import './form.css'

const Form = (props) => {
  let inputs = props.data.input.map(input => {
    switch (input.inputType) {
      case 'textarea':
        return(
          <div className="input-field" key={input.value}>
            <textarea className="materialize-textarea" id={input.value} onChange={props.handleChange}></textarea>
            <label htmlFor={input.value} htmlFor={input.value}>{input.value}</label>
          </div>
        )
      case 'button':
        return(
          <div className="input-field" key={input.value}>
            <button className="btn blue lighten-1 z-depth-0">{input.value}</button>
          </div>
        )
      default:
        return(
          <div className="input-field" key={input.value}>
            <label htmlFor={input.value}>{input.value}</label>
            <input type={input.type} id={input.value} onChange={props.handleChange} />
          </div>
        )
    }
  })

  return(
    <div className="box">
      <h5 className="white-text text-darken-3">Title</h5>
      <form onSubmit={props.handleSubmit}>
        {inputs}
      </form>
    </div>
  )
}

export default Form
