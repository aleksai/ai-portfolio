import React from 'react';
import { IndexLink, Link } from 'react-router';

class LeftPanel extends React.Component {
  render() {
    return (
        <div className="app-left-panel">
          <ul>
            <li><IndexLink to="/" activeClassName="active" >Projects</IndexLink></li>
            <li><Link to="skills" activeClassName="active" >Skills</Link></li>
            <li><Link to="career" activeClassName="active" >Career</Link></li>
          </ul>
      </div>
    )
  }
}

export default LeftPanel;
