// Dependencies
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from "redux-form";
// Apps Reducers
import CartReducer from '../containers/car/reducer.js';
import ProductListReducer from '../containers/ProductList/reducer.js';
import redirectReducer from '../containers/home/reducer.js';

const rootReducer = combineReducers({
  cart: CartReducer,
  products: ProductListReducer,
  routing: routerReducer,
  redirect: redirectReducer,
  form: formReducer.plugin({
    "change": (state, action) => {
      // reset form (wipe state) when navigating away from the  edit page
      switch(action.type) {
        case "@@router/LOCATION_CHANGE":
          return undefined;
        default:
          return state;
      }
    }
  })
});

export default rootReducer;
