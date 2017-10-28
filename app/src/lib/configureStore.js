// Dependencies
import isomorphicFetch from 'isomorphic-fetch';
import promiseMiddleware from 'redux-promise-middleware';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
// Reducers
import rootReducer from '../reducers/index.js';

import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/*
const injectMiddleware = deps => ({ dispatch, getState }) => next => action =>
  next(typeof action === 'function'
    ? action({ ...deps, dispatch, getState })
    : action
  );
*/
  const logger = store => next => action => {
          console.group(action.type)
          console.info('dispatching', action)
          let result = next(action)
          console.log('next state', store.getState())
          console.groupEnd(action.type)
          return result
      }

export default function configureStore(preloadedState) {
/*
  const middleware = [

    injectMiddleware({
      fetch: isomorphicFetch,
      thunk: thunk,
      logger:logger,
      thunk:thunk
    }),

    promiseMiddleware({
      promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR']
    }),
    reduxImmutableStateInvariant()
  ];
*/
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(logger,thunk))
    );
}
