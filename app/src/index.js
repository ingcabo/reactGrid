//dependencies
import React from 'react'
//import {Component} from 'react' este es un comentario
import { BrowserRouter as Router } from 'react-router-dom';
import {render} from 'react-dom';

//Components

//import App from './Components/App';
//import Header  from  './Components/Header'
//import Content from  './Components/Content'
//import Footer  from  './Components/Footer'

//route
import AppRoutes  from  './route'

//data
//import items   from  './data/menu'

const app = document.getElementById('app')
//ReactDOM.render(<FiltrableProducTable store={db} />,app)
render(
    <Router>
      <AppRoutes/>
    </Router>
  ,app)
