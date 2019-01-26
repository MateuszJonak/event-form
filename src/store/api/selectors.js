import { createSelector } from 'reselect';
import { get } from 'lodash/fp';
import { REDUCER_NAME } from './reducers';

const apiSelectors = method => {
  const paramsToGet = [REDUCER_NAME, method];
  const getState = get(paramsToGet);

  return {
    getState,
    getData: createSelector(
      getState,
      get('data'),
    ),
    getError: createSelector(
      getState,
      get('error'),
    ),
    getLoading: createSelector(
      getState,
      get('loading'),
    ),
  };
};

export default apiSelectors;
