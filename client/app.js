import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';

import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import intializeRoutes from './routes';

import configureStore from './store/configureStore';

const store = configureStore(browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
const routes = intializeRoutes(store);

render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
