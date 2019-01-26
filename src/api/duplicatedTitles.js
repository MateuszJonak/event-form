/* @flow */
import createRequest from './createRequest';

export const get = () =>
  createRequest({
    method: 'GET',
    url: 'http://www.mocky.io/v2/5bcdd8732f00007300c855da',
  });
