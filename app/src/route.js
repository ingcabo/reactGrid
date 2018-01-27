import React from 'react';
import { Provider, connect } from 'react-redux';
import {  browserHistory } from 'react-router';
import { BrowserRouter, Route,  Switch, Link } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './Components/App';
import About from './Components/About/index.js'
import Contact from './Components/Contact/index.js'
import Home from './Components/Home/index.js'
import Page404 from './Components/Page404/index.js'
import MenuSim  from  './Components/MenuSim.js';

import storegrid from './Components/storegrid.js'
import configureStore from './lib/configureStore.js';
import { loadProducst } from './containers/ProductList/actions.js';

const store = configureStore();

store.dispatch(
  loadProducst()
);

//const history = 
syncHistoryWithStore(browserHistory, store);

const AppRoutes = ()=>
  <App>
<Provider store={store}>
  <BrowserRouter>
    <div>
    <MenuSim />
     <Switch>
      <Route exact path="/about" component= {About} />
      <Route exact path="/contact" component= {Contact} />
      <Route exact path="/store" component= {storegrid} />
      <Route exact path="/"  component= {Home} />
      <Route  component= {Page404} />
    </Switch>
  </div>
  </BrowserRouter>
</Provider>
  </App>;

export default  AppRoutes;
