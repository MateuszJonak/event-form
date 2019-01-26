/* @flow */
import createRequest from './createRequest';

export const get = () =>
  createRequest({
    method: 'GET',
    url: 'http://www.mocky.io/v2/5bcdd3942f00002c00c855ba',
  });
