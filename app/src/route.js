import React from 'react';
import {  Switch } from 'react-router-dom';
//import { Router } from "react-router";
import App from './Components/App.js';
import About from './Components/About/index.js'
import Contact from './Components/Contact/index.js'
import Home from './Components/Home/index.js'
import Page404 from './Components/Page404/index.js'
import storegrid from './Components/storegrid.js'
import configureStore from './lib/configureStore.js';

import { Provider, connect } from 'react-redux';
import { Router, Route, browserHistory,IndexRoute,Link } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { loadProducst } from './containers/ProductList/actions.js';

const store = configureStore();

store.dispatch(
  loadProducst()
);

const history = syncHistoryWithStore(browserHistory, store);

const AppRoutes = ()=>
  <App>
    <Provider store={store}>
      <Router history = {history}>
    <Switch>
      <Route exact path="/about" component= {About} />
      <Route exact path="/contact" component= {Contact} />
      <Route exact path="/store" component= {storegrid} />
      <Route exact path="/"  component= {Home} />
      <Route  component= {Page404} />
    </Switch>
  </Router>
</Provider>
  </App>;

export default  AppRoutes;
