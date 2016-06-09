import React from 'react';
import { connect } from 'react-redux';
import { IndexLink, Link } from 'react-router';
import { changeTheme } from '../redux/modules/theme';

import ThemeSwitcher from './ThemeSwitcher';

class LeftPanel extends React.Component {
  render() {
    return (
        <div className="leftPanel">
          <div className="logo"><img src="../../resources/images/ai-logo.svg"/></div>

          <div className="info">
            <div className="name">Aleks Iraguha</div>
            <div className="position">Software Engineer</div>
            <div className="compnay">CVENT</div>
          </div>

          <div className="connect">
            <button className={`btn btn-${this.props.theme}`}>Connect</button>
          </div>

          <ThemeSwitcher {...this.props} onChange={this.props.changeTheme} />
      </div>
    )
  }
}

const getProps = (state) => {
  return {
    theme: state.theme.name
  }
};

const getActions = (dispatch) => {
  return {
    changeTheme: (theme) => {
      dispatch(changeTheme(theme));
    }
  }
};

export default connect(getProps, getActions)(LeftPanel);
