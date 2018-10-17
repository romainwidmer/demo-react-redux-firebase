import React from 'react'
import './project.css'
import moment from 'moment'

const ProjectSummary = ({project}) => {
  return(
    <div className="card z-depth-0 project-summary">
      <span className="card-title">{project.title}</span>
      <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
      <p className="grey-text darken-3">{moment(project.createdAt.toDate()).format('LL')}</p>
    </div>
  )
}

export default ProjectSummary
