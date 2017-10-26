//nos permite crear un store de redux
//modificacion
import { createStore, applyMiddleware, compose  } from 'redux';
import { routerReducer, routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';








//definimos la funcion reductora recive dos parametros el estado actual y la accion
var cars = new Array();

const reducer = (state = initialState, action) => {
    if (action.type === "REPLACE_PRODUCTS") {
        //console.log(action.products.data);
        return {
            ...state,
            products: action.products
        };
    } else if (action.type === "ADD_TO_CART") {

        cars = AddItemCount(cars, action);

        return {
            ...state,
            //cart: state.cart.concat(action.product)
            cart: cars
        };
    } else if (action.type === "REMOVE_FROM_CART") {

        cars = restItems(state.cart, action);

        return {
            ...state,
            cart: cars
        };
    }

    return state;
};

//funcion para sumar item al carrito de compra
const AddItemCount = (cars, action) => {
    const longArray = cars.length;
    const index = cars.findIndex(item => item.id === action.product.id);
    if (longArray == 0) {
        cars = cars.concat(action.product);
        cars[longArray]['cant'] = 1
    } else {
        if (index == -1) {
            cars = cars.concat(action.product);
            cars[longArray]['cant'] = 1
        } else {
            cars[index]['cant'] ++;
        }
    }
    return cars;
}

//funcion que resta items del carrito
const restItems = (state, action) => {
    cars = state;
    const index = cars.findIndex(item => item.id === action.product.id);
    if (action.product.cant == 1) {
        //buscar el indice por medio de un valor de campo
        cars.splice(index, 1);
    } else {
        cars[index]['cant'] --;
    }
    return cars;
}


const logger = store => next => action => {
        console.group(action.type)
        console.info('dispatching', action)
        let result = next(action)
        console.log('next state', store.getState())
        console.groupEnd(action.type)
        return result
    }
    //http://redux.js.org/docs/advanced/Middleware.html
    // recive la funcion reductora y estado inicial
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default  createStore(
   reducer, /* preloadedState, */
     {
      cart: [],
      products: [],
      routing: routerReducer,
      page: 1
     },
   composeEnhancers(
     applyMiddleware(logger,thunk)
));
