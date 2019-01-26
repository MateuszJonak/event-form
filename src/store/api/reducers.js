import { handleActions } from 'redux-actions';
import update from 'immutability-helper';
import { CALL, SUCCESS, FAILED, RESET } from './actions';

export const REDUCER_NAME = 'api';

const initialState = {};
const methodInitialState = {
  loading: false,
  data: undefined,
  error: undefined,
};

const loadingReducer = (state, { payload: { method } }) =>
  update(state, {
    [method]: { $set: { ...methodInitialState, loading: true } },
  });

export default handleActions(
  {
    [CALL]: loadingReducer,
    [SUCCESS]: (state, { payload: { method, response } }) =>
      update(state, {
        [method]: {
          $set: {
            ...methodInitialState,
            loading: false,
            data: response,
          },
        },
      }),
    [FAILED]: (state, { payload: { method, error } }) =>
      update(state, {
        [method]: {
          $set: {
            ...methodInitialState,
            loading: false,
            error,
          },
        },
      }),
    [RESET]: (state, { payload: { method } }) =>
      update(state, {
        [method]: {
          $set: methodInitialState,
        },
      }),
  },
  initialState,
);
