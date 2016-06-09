import React from 'react';
import AppStyles from './resources/less/App.less';
import LeftPanel from './src/containers/LeftPanel';

import { Provider } from 'react-redux';
import configureSore from './src/redux/configureStore';

let store = configureSore();

class App extends React.Component {
  render() {
    return (
      <div>
        <LeftPanel />
        <div className="app-main">
          <div className = "ri-content">{this.props.children}</div>
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
          <App {...this.props} />
        </Provider>
      </div>
    );
  }
}

export default AppContainer;