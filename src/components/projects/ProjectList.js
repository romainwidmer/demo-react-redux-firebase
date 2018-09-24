import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary'
import { connect } from 'react-redux'


class ProjectList extends Component {
  render() {
    const posts = this.props.posts.map(post => {
      return (
        <ProjectSummary post={post} key={post.id} />
      )
    })

    return(
      <div className="project-list section">
        {posts}
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(ProjectList)
