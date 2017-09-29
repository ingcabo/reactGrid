//nos permite crear un store de redux
//modificacion
import { createStore } from 'redux';
//definimos la funcion reductora recive dos parametros el estado actual y la accion
var cars = new Array();
var flat = false;
var ind = null;

const reducer = (state,action) =>{

  if (action.type==="ADD_TO_CART"){


    //aca se arma el array que alimenta al carrito sumando item que se repiten
    cars =  sumItems(cars,action);

    //retornamos un nuevo objeto


      return{
      //copiar las llaves del estado actual
      ...state,
      //modificamos la llave car, lo qu existia en el estado actual debe concatenarlo, creando un nuevo arreglo
      cart: cars

    }

  }else if (action.type==="REMOVE_FROM_CART"){
    return{
      ...state,
      cart:state.cart.filter(product => product.id != action.product.id)
    };
  }

  return state;
};

//funcion para sumar item al carrito de compra
const sumItems = (cars, action) =>{

  for (var index = 0; index < cars.length; ++index) {

    if (cars[index].id === action.product.id){
      flat = true;
      ind  = index;
    }

  }

  if (cars.length == 0){
    cars  = cars.concat(action.product);
    cars[0]['cant'] =1
  }else{
        if (flat == false){
            action.product['cant'] =1;
            cars = cars.concat(action.product);
        }else{
           cars[ind]['cant'] = cars[ind]['cant']+ 1;
              }
       }
flat = false;
return cars;
}

// recive la funcion reductora y estado inicial

export default createStore(reducer, { cart: [] });
