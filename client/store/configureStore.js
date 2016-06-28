import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';

export default function configureStore(history, initialState={}, sagaMiddleware) {
  const middleware = [routerMiddleware(history), sagaMiddleware];

  const reducers = combineReducers({routing: routerReducer});

  const store = createStore(reducers, {}, compose(
    applyMiddleware(...middleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  ));

  return store;
}
