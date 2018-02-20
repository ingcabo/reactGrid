import {createStore, applyMiddleware, compose} from 'redux';
import {routerReducer,routerMiddleware } from 'react-router-redux';
import { browserHistory } from "react-router";
//import { BrowserRouter } from "react-router-dom";

import rootReducer from '../reducers/index.js';
import thunk from 'redux-thunk';

// add the middlewares
let middlewares = [];

//const historyMidd = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}
/*
const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    })
    throw err
  }
}
*/
middlewares.push(logger);
middlewares.push(thunk);
middlewares.push(routerMiddleware(browserHistory));
// apply the middleware
const middleware = applyMiddleware(...middlewares);
const composeEnhan = composeEnhancers(middleware);

export default function configureStore() {
  return createStore(
    rootReducer,
    composeEnhan
  );
}
