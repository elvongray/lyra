import React from 'react';

import { Route, IndexRoute } from 'react-router';

import Login from './containers/LoginContainer';

export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    //const { user: { isAuthenticated }} = store.getState();
    if (true) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
    callback();
  }

  const redirectAuth = (nextState, replace, callback) => {
    //const { user: { isAuthenticated }} = store.getState();
    if (false) {
      replace({
        pathname: '/home',
      })
    }
    callback();
  }

  return (
    <Route path='/' >
      <Route path="login" component={Login} onEnter={redirectAuth}/>
    </Route>
  );
}
