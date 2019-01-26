import { handleActions } from 'redux-actions';

export const REDUCER_NAME = 'event';

const initialState = {
  categories: [],
  coordinators: [],
};

export default handleActions({}, initialState);
