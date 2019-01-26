import { createActions, createAction } from 'redux-actions';
import { get } from 'lodash/fp';
import api from '../../api';

export const CALL = 'api/call';
export const CALL_EMPTY = 'api/callEmpty';
export const SUCCESS = 'api/success';
export const FAILED = 'api/failed';
export const RESET = 'api/reset';

export default createActions({
  [CALL]: (method, config) => ({ method, ...config }),
  [SUCCESS]: (method, response) => ({ method, response }),
  [FAILED]: (method, error) => ({ method, error }),
  [RESET]: method => ({ method }),
});

export const call = createAction(CALL, (method, config) => ({
  method,
}));
export const success = createAction(SUCCESS, (method, response) => ({
  method,
  response,
}));
export const failed = createAction(FAILED, (method, error) => ({
  method,
  error,
}));
export const reset = createAction(RESET, method => ({ method }));

export const callAPI = (method, config) => dispatch => {
  dispatch(call(method, config));

  const getMethod = get(method);

  if (!getMethod(api)) {
    throw new Error('Method not defined');
  }
  const request = getMethod(api)({
    ...config,
  });
  return request.call().then(
    response => {
      dispatch(success(method, response));

      return response;
    },
    error => {
      dispatch(failed(method, error));

      throw error;
    },
  );
};
