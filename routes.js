import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './App';
import Home from './src/containers/Home';
import Project from './src/containers/Project';

export default  (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="projects" component={Home} />
    <Route path="projects/:projectName" component={Project} />
    <Route path="skills" component={Home} />
    <Route path="career" component={Home} />
  </Route>
)
