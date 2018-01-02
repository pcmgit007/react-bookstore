// Set up your root reducer here...
import { combineReducers } from 'redux';
import {bookReducer} from './dashboardReducers'

export default combineReducers({
  book: dashboardReducers
});
