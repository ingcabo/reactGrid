// Dependencies
import {combineReducers} from 'redux';

// Apps Reducers
import CartReducer from '../containers/car/reducer.js';
import ProductListReducer from '../containers/ProductList/reducer.js';

const rootReducer = combineReducers({
  cart: CartReducer,
  products: ProductListReducer
});

export default rootReducer;
