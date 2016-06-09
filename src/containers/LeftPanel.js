import React from 'react';
import { IndexLink, Link } from 'react-router';

class LeftPanel extends React.Component {
  render() {
    return (
        <div className="leftPanel">
          <div className="logo"><img src="../../resources/images/ai-logo.svg"/></div>

          <div className="info">
            <div className="name">Aleks Iraguha</div>
            <div className="position">Software Engineer</div>
            <div className="compnay">CVENT, Salesforce, Radian6</div>
          </div>

          <div className="connect">
            <button className="btn btn-blue">Connect</button>
          </div>
      </div>
    )
  }
}

export default LeftPanel;
