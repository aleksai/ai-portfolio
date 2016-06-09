import React from 'react';
import { IndexLink, Link } from 'react-router';

class ThemeSwitcher extends React.Component {

  constructor(pros) {
    super(pros);
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(evt) {
    if (this.props.onChange) {
      this.props.onChange(evt.target.id);
    }
  }

  render() {
    const { theme } = this.props;
    const blueClass = theme === 'blue' ? 'themeBtn blue selected' : 'themeBtn blue';
    const redClass = theme === 'red' ? 'themeBtn red selected' : 'themeBtn red';
    return (
        <div className="themeSwitcher">
          <span className={blueClass} id="blue" onClick={this.changeTheme}></span>
          <span className={redClass} id="red" onClick={this.changeTheme}></span>
      </div>
    )
  }
}

export default ThemeSwitcher;
