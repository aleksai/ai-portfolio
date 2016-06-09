import React from 'react';
import AppStyles from './resources/less/App.less';
import LeftPanel from './src/containers/LeftPanel';

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

  onAppStateChange() {
    const appState = store.getState();
    if (appState.theme.name !== this.state.theme) {
      this.setState({ theme: appState.theme.name });
    }
  }

  render() {
    return (
      <div className={`theme-${this.state.theme}`}>
        <LeftPanel />
        <div className="appMain">
          {this.props.children}
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
