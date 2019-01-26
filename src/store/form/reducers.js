import { handleActions } from 'redux-actions';
import { UPDATE_FIELD_VALUE } from './actions';

export const REDUCER_NAME = 'form';

const initialState = {
  values: {},
};

export default handleActions(
  {
    [UPDATE_FIELD_VALUE]: (state, action) => {
      return {
        values: {
          ...state.values,
          [action.payload.name]: action.payload.value,
        },
      };
    },
  },
  initialState,
);
