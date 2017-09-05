//dependencies
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import {render} from 'react-dom';

//Components

//route
import AppRoutes  from  './route'

const app = document.getElementById('app')
//ReactDOM.render(<FiltrableProducTable store={db} />,app)
render(
    <Router>
      <AppRoutes/>
    </Router>
  ,app);
