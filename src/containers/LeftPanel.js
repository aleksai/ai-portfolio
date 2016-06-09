import React from 'react';
import { IndexLink, Link } from 'react-router';
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
            <button className="btn btn-blue">Connect</button>
          </div>

          <ThemeSwitcher />
      </div>
    )
  }
}

export default LeftPanel;
