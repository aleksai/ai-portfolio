import React from 'react';

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.onCloseClick = this.onCloseClick.bind(this);
  }

  componentDidMount() {
    setTimeout(()=>this.setState({ isActive: true }),50);
  }

  onCloseClick() {
    this.setState({ isActive: false });
    setTimeout(() => history.back(), 500);
  }

  render() {
    const { isActive } = this.state;
    const modalClass = isActive ? 'modal isActive': 'modal';
    return (
      <div className={modalClass}>
        <div className="modalContent">
          <span className="btnClose" onClick={this.onCloseClick}>
            <img src="../../resources/images/icon-error-white.svg"/>
          </span>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
