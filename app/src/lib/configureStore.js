import {createStore, applyMiddleware, compose} from 'redux';
import {routerReducer,routerMiddleware } from 'react-router-redux';
import { browserHistory } from "react-router";
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
