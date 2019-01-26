import { combineReducers } from 'redux';
import { eventReducer, REDUCER_NAME as EVENT_REDUCER_NAME } from './event';

export default combineReducers({
  [EVENT_REDUCER_NAME]: eventReducer,
});
