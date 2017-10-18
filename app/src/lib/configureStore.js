
// Dependencies
//https://github.com/MilkZoft/hello-world-react/commit/ce10c9c0dfeea60251209f5ea6e379cb7cfcd195
import isomorphicFetch from 'isomorphic-fetch';
import promiseMiddleware from 'redux-promise-middleware';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createStore, applyMiddleware } from 'redux';

  const injectMiddleware = deps => ({ dispatch, getState }) => next => action =>
    next(typeof action === 'function'
      ? action({ ...deps, dispatch, getState })
      : action
  );

  export default function configureStore(options, rootReducer) {
    const { initialState = {} } = options;

    //ionconst initialState = options.initialState;

    const middleware = [
      injectMiddleware({
        fetch: isomorphicFetch
      }),
      promiseMiddleware({
        promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR']
      }),
      reduxImmutableStateInvariant()
    ];

    return createStore(rootReducer, initialState, applyMiddleware(...middleware));
  }
