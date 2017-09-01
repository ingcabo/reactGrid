import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './Components/App.js'
import About from './Components/About/index'
import Contact from './Components/Contact/index'
import Home from './Components/Home/index'
import Page404 from './Components/Page404/index'

export default  AppRoutes = ()=>
  <App>
    <switch>
      <Route path="/about" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/" component={Home} />
      <Route  component={Page404} />
    </switch>
  </App>;
