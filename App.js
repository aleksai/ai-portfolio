import React from 'react';
import AppStyles from './resources/less/App.less';
import LeftPanel from './src/containers/LeftPanel';
import Modal from './src/components/Modal';

import { Provider } from 'react-redux';
import configureSore from './src/redux/configureStore';

let store = configureSore();

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { theme: props.theme };
    this.onAppStateChange = this.onAppStateChange.bind(this);
  }

  componentDidMount() {
    store.subscribe(this.onAppStateChange);
  }

  componentWillReceiveProps(nextProps) {
    const nextIsModal = this.isModalRoute(nextProps);
    const routeTypeChanged = this.isModalRoute(this.props) !== nextIsModal;
    this.previousChildren = nextIsModal && routeTypeChanged ? this.props.children : this.previousChildren;
  }

  isModalRoute(props) {
    const { location } = props;
    const { query } = location;
    return Boolean(query && query.modal);
  }

  onAppStateChange() {
    const appState = store.getState();
    if (appState.theme.name !== this.state.theme) {
      this.setState({ theme: appState.theme.name });
    }
  }

  render() {
    const isModal = this.isModalRoute(this.props);
    const modalView = isModal ? (<Modal {...this.props} >{this.props.children}</Modal>) : undefined;
    return (
      <div className={`theme-${this.state.theme}`}>
        <LeftPanel />
        <div className="appMain">
          {isModal ? this.previousChildren : this.props.children}
          {modalView}
        </div>
      </div>
    );
  }
}

class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <App {...this.props} theme={store.getState().theme.name} />
        </Provider>
      </div>
    );
  }
}

export default AppContainer;
