import { get } from 'lodash/fp';
import api from '../../api';
import apiSelectors from '../api/selectors';

import { REDUCER_NAME } from './reducers';

export const getValues = state => get(`${REDUCER_NAME}.values`)(state);

const apiCategoriesSelector = apiSelectors(api.methods.CATEGORIES_GET);
export const getCategories = apiCategoriesSelector.getData;
