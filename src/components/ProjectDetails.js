import React from 'react';

class ProjectDetail extends React.Component{
  render() {
    const { project } = this.props;
    return (
      <div className="projectDetails">
        <div className="title">{project.title}</div>
        <div className="photo"><img src={project.imageUrl} /></div>
      </div>
    );
  }
}

export default ProjectDetail;
