import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './Components/App.js'
import About from './Components/About/index.js'
import Contact from './Components/Contact/index.js'
import Home from './Components/Home/index.js'
import Page404 from './Components/Page404/index.js'

const  AppRoutes = ()=>
  <App>
    <Switch>
      <Route path="/about" component= {About} />
      <Route path="/contact" component= {Contact} />
      <Route path="/" component={Home} />
      <Route  component={Page404} />
    </Switch>
  </App>;

export default  AppRoutes;
//https://github.com/jackfranklin/universal-react-example/blob/master/routes.js
