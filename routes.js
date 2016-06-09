import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './App';
import Home from './src/containers/Home';

export default  (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="skills" component={Home} />
    <Route path="career" component={Home} />
  </Route>
)
