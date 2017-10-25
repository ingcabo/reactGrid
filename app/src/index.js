//dependencies
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/store.js';
import AppRoutes  from  './route';
import { loadProducst } from './actions/actionCreators.js';


store.dispatch(loadProducst());



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
