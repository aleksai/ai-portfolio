import React from 'react';
import { Link } from 'react-router';

class SkillList extends React.Component{
  render() {
    return (
      <div className="skillList">
        <div className="skill">
          <div className="bar fill-8"></div>
        </div>
        <div className="skill">
          <div className="bar fill-6"></div>
        </div>
        <div className="skill">
          <div className="bar fill-9"></div>
        </div>
      </div>
    );
  }
}

export default SkillList;
