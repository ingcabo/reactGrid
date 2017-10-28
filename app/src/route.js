import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './Components/App.js'
import About from './Components/About/index.js'
import Contact from './Components/Contact/index.js'
import Home from './Components/Home/index.js'
import Page404 from './Components/Page404/index.js'
import storegrid from './Components/storegrid.js'

const AppRoutes = ()=>
  <App>
    <Switch>
      <Route exact path="/about" component= {About} />
      <Route exact path="/contact" component= {Contact} />
      <Route exact path="/store" component= {storegrid} />
      <Route exact path="/" component= {Home} />
      <Route  component= {Page404} />
    </Switch>
  </App>;
export default  AppRoutes;
