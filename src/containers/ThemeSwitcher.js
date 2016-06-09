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
    return (
        <div className="themeSwitcher">
          <span className="themeBtn dark" id="dark" onClick={this.changeTheme}></span>
          <span className="themeBtn light" id="light" onClick={this.changeTheme}></span>
      </div>
    )
  }
}

export default ThemeSwitcher;
