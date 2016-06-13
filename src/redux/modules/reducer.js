import { combineReducers } from 'redux';
import theme from './theme';
import projects from './projects';

export default combineReducers({
  theme,
  projects
});
