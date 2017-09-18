//nos permite crear un store de redux
import { createStore } from 'redux';
//definimos la funcion reductora recive dos parametros el estado actual y la accion
var cart = [];
var cars = new Array();
var carsf = new Array();
var flat = false;
var ind = null;
var i = 1;
//id: 1, name: "Hipster Ultimate", price, cant
const reducer = (state,action) =>{

  if (action.type==="ADD_TO_CART"){

      // make a copy of the existing array

          //console.log("longitud "+cars.length);
          for (var index = 0; index < cars.length; ++index) {
            console.log(index);
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

        console.log(cars);
        flat = false;
        //console.log(cars);
        //https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript
    //retornamos un nuevo objeto
      return{
      //copiar las llaves del estado actual

      ...state,
      //modificamos la llave car, lo qu existia en el estado actual debe concatenarlo, creando un nuevo arreglo
      //cart:state.cart.concat(cart)
      cart: cars

    }


  }

  return state;
};

// recive la funcion reductora y estado inicial
export default createStore(reducer, { cart: [] });
