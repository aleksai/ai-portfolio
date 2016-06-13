import React from 'react';
import { connect } from 'react-redux';
import ProjectDetails from '../components/ProjectDetails';

class Project extends React.Component {
  render() {
    return (
      <div className="app-page">
        <ProjectDetails {...this.props}  />
      </div>
    );
  }
}

const getProjectByName = (projectList=[], projectName) => {
  return projectList.find(item => item.name === projectName);
};

const getProps = (state, props) => {
  return {
    projectList: state.projects.projectList,
    projectName: props.routeParams.projectName,
    project: getProjectByName(state.projects.projectList, props.routeParams.projectName)
  }
};

const getActions = (dispatch) => {
  return {
    changeTheme: (theme) => {
      // dispatch(changeTheme(theme));
    }
  }
};

export default connect(getProps)(Project);
