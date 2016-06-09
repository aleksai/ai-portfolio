import React from 'react';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <div className = "app-page">
        <h2>Home</h2>
      </div>
    );
  }
}

export default connect()(Home);