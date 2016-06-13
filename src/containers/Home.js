import React from 'react';
import { connect } from 'react-redux';
import ProjectsGallery from '../components/ProjectsGallery';
import ToolList from '../components/ToolList';
import SkillList from '../components/SkillList';

class Home extends React.Component {
  render() {
    return (
      <div className="app-page">
        <h3>Recent Projects</h3>
        <ProjectsGallery projectList={this.props.projectList} />
        <div className="hDivider gray"/>
        <h3>Skillset</h3>
        <SkillList />
        <div className="hDivider gray"/>
        <h3>Design & Development Tools</h3>
        <ToolList />
      </div>
    );
  }
}

const getProps = (state) => {
  return {
    projectList: state.projects.projectList
  }
};

export default connect(getProps)(Home);
