// Dependencies
import { combineReducers } from 'redux';

// Apps Reducers
import CartReducer from '../containers/car/reducer.js';
import ProductListReducer from '../containers/car/reducer.js';



const rootReducer = combineReducers({
CartReducer: CartReducer,
ProductListReducer: ProductListReducer
});

export default rootReducer;
