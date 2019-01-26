/* @flow */
import createRequest from './createRequest';

export const get = () =>
  createRequest({
    method: 'GET',
    url: 'http://www.mocky.io/v2/5bcdd7992f00006300c855d5',
  });
