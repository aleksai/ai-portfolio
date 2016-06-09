import React from 'react';
import { connect } from 'react-redux';
import ProjectsGallery from '../components/ProjectsGallery';

class Home extends React.Component {
  render() {
    return (
      <div className="app-page">
        <h3>Recent Projects</h3>
        <ProjectsGallery />
      </div>
    );
  }
}

export default connect()(Home);
