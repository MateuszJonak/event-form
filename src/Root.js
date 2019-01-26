import React from 'react';
import { Provider } from 'react-redux';
import storeConfigure from './store/configure';
import App from './frames/App';

const Root = () => (
  <Provider store={storeConfigure()}>
    <App />
  </Provider>
);

export default Root;
