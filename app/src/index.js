//dependencies
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import {render} from 'react-dom';
import { Provider, connect } from 'react-redux';
//import store from './lib/store.js';
import AppRoutes  from  './route';
//import { loadProducst } from './actions/actionCreators.js';
import { loadProducst } from './containers/ProductList/actions.js';
// Redux store
import configureStore from './lib/configureStore.js';

// Configuring redux store
const store = configureStore();

store.dispatch(
  loadProducst()
);

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
