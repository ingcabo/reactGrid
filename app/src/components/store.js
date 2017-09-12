//nos permite crear un store de redux
import { createStore } from 'redux';
//definimos la funcion reductora recive dos parametros el estado actual y la accion

//id: 1, name: "Hipster Ultimate", price, cant
const reducer = (state,action) =>{

  if (action.type==="ADD_TO_CART"){
    let cart = [];

      // make a copy of the existing array

        if (cart.length > 0 ) {
           cart = state.cart;
        }else{
           cart  = action.product;
        }


         let idAlreadyExists = state.cart.indexOf(cart) > -1;

        if (idAlreadyExists){
          cart = {};
        }else{

        }

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
