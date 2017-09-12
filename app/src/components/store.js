//nos permite crear un store de redux
import { createStore } from 'redux';
//definimos la funcion reductora recive dos parametros el estado actual y la accion
const reducer = (state,action) =>{
  if (action.type==="ADD_TO_CART"){
    //retornamos un nuevo objeto
    return{
      //copiar las llaves del estado actual
      ...state,
      //modificamos la llave car, lo qu existia en el estado actual debe concatenarlo, creando un nuevo arreglo
      cart:state.cart.concat(action.product)
    }
  }
  return state;
};

// recive la funcion reductora y estado inicial
export default createStore(reducer, { cart: [] });
