import React from 'react'

const ProjectSummary = ({post}) => {
  return(
    <div className="card z-depth-0 project-summary transparent">
      <span className="card-title">{post.title}</span>
      <p>Posted by {post.postedBy}</p>
      <p className="grey-text darken-3">{post.date}</p>
    </div>
  )
}

export default ProjectSummary
