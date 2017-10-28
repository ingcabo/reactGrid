
//definimos la funcion reductora recive dos parametros el estado actual y la accion
var cars = new Array();


export const initialStateCart = {
  cart:[]
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


export default function  CartReducer  (state = [], action) {

    if (action.type === "REMOVE_FROM_CART") {

        cars = restItems(state.cart, action);

        return {
            ...state,
            cart: cars
        };
    }

    return state;
};
