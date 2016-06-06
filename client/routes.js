import React from 'react';
import { Route, IndexRoute } from 'react-router';

export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { isAuthenticated }} = store.getState();
    if (!isAuthenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
    callback();
  }

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { isAuthenticated }} = store.getState();
    if (isAuthenticated) {
      replace({
        pathname: '/home',
      })
    }
    callback();
  }

  return (
    <Route path='/' component={App}>
      <IndexRoute component={Login} onEnter={redirectAuth}/>
      <Route path='home' component={Home} onEnter={requireAuth}/>
    </Route>
  );
}
