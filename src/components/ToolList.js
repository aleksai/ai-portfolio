import React from 'react';
import { Link } from 'react-router';

class ToolList extends React.Component{
  render() {
    return (
      <div className="toolList">
        <span className="tool">Node</span>
        <span className="tool">Webpack</span>
        <span className="tool">Gulp</span>
        <span className="tool">Jenkins</span>
        <span className="tool">Sketch</span>
      </div>
    );
  }
}

export default ToolList;
