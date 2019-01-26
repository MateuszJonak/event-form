import { combineReducers } from 'redux';
import { formReducer, REDUCER_NAME as FORM_REDUCER_NAME } from './form';
import { apiReducer, REDUCER_NAME as API_REDUCER_NAME } from './api';

export default combineReducers({
  [FORM_REDUCER_NAME]: formReducer,
  [API_REDUCER_NAME]: apiReducer,
});
