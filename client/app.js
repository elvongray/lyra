import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';

import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import intializeRoutes from './routes';

import configureStore from 'store/configureStore';

const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
const routes = intializeRoutes(store);

render(
  <Provider store={store}>
    <Router history={history} onUpdate={onUpdate}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
