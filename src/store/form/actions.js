import { createAction } from 'redux-actions';
export const UPDATE_FIELD_VALUE = 'form/UPDATE_FIELD_VALUE';

export const updateFieldValue = createAction(
  UPDATE_FIELD_VALUE,
  (name, value) => ({ name, value }),
);
