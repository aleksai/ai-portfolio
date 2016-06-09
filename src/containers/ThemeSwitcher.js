import React from 'react';
import { IndexLink, Link } from 'react-router';

class ThemeSwitcher extends React.Component {
  render() {
    return (
        <div className="themeSwitcher">
          <span className="themeBtn blue"></span>
          <span className="themeBtn white"></span>
      </div>
    )
  }
}

export default ThemeSwitcher;
