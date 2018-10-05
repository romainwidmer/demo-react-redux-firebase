import React from 'react'
import './project.css'

const ProjectSummary = ({project}) => {
  return(
    <div className="card z-depth-0 project-summary">
      <span className="card-title">{project.title}</span>
      <p>Posted by {project.authorLastName}</p>
      <p className="grey-text darken-3">{project.date}</p>
    </div>
  )
}

export default ProjectSummary
