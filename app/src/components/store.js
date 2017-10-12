//nos permite crear un store de redux
//modificacion
import { createStore, applyMiddleware} from 'redux';
//definimos la funcion reductora recive dos parametros el estado actual y la accion
var cars = new Array();
var flat = false;
var ind = null;
const reducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        //aca se arma el array que alimenta al carrito sumando item que se repiten
        cars = AddItemCount(cars, action);
        return {
            //copiar las llaves del estado actual
            ...state,
            //modificamos la llave car, lo qu existia en el estado actual debe concatenarlo, creando un nuevo arreglo
            cart: cars
        };
    } else if (action.type === "REMOVE_FROM_CART") {
        cars = restItems(state.cart, action);
        return {...state,
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
            cars[index]['cant']++;
        }
    }
    return cars;
}
const restItems = (state, action) => {
    cars = state;
    const index = cars.findIndex(item => item.id === action.product.id);
    if (action.product.cant == 1) {
        //buscar el indice por medio de un valor de campo
        cars.splice(index, 1);
    } else {
        cars[index]['cant']--;
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
export default createStore(reducer, {
    cart: []
}, applyMiddleware(logger));
