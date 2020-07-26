/* eslint-disable no-underscore-dangle */
// Startup point for client-side application

// import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import Routes from './Routes';

import './index.css';

const state = window.__PRELOADED_STATE__;
const store = createStore(reducers, state, applyMiddleware(thunk));

delete window.__PRELOADED_STATE__;

const ReactApp = () => (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(Routes)}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

ReactDOM.hydrate(<ReactApp />,
  document.querySelector('#root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
