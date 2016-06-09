import React from 'react';

const OPTIONS = [
  { title: 'Artists', url: '/charts/artists'},
  { title: 'Songs', url: '/charts/songs' },
  { title: 'Albums', url: '/charts/albums' }
];

class ButtonBar extends React.Component {

  render() {
    const { location } = this.props;
    console.log(location.pathname);
    return (
      <div className="button-bar">
      {
        OPTIONS.map((item, index) => {
          return <a key={index} className="button">{item.title}</a>;
        })
      }
      </div>
    );
  }
}

export default ButtonBar;
