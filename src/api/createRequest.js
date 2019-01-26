/* @flow */

export default ({ body, url, headers = {}, method = 'GET' }) => {
  return {
    call: () =>
      fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          ...headers,
        },
        body: JSON.stringify(body),
      }).then(res => res.json()),
  };
};
