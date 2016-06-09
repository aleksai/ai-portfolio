import { combineReducers } from 'redux';
import charts from './charts'
import artist from './artist'
export default combineReducers({
  charts,
  artist
});
