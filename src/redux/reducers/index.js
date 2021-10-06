import {combineReducers} from 'redux';
import table from './table';
import chart from './chart';
import map from './map';
import auth from './auth';

export default combineReducers({
  table,
  chart,
  map,
  auth,
});
