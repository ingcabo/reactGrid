//dependencies
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/store.js';
//import './components/global/css/store.css'

//Components

//route
import AppRoutes  from  './route'

const app = document.getElementById('app')
//ReactDOM.render(<FiltrableProducTable store={db} />,app)

render(
<Provider store={store}>

    <Router>
      <AppRoutes/>
    </Router>
</Provider>

  ,app);

  //https://www.youtube.com/watch?v=aaMoVAcP5-w
