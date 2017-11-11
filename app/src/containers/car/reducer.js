//definimos la funcion reductora recive dos parametros el estado actual y la accion
export const initialStateCart = {cart: []}
//funcion que resta items del carrito
const restItems = (cars, action) => {

  //cars.filter()

  const index = cars.findIndex(item => item.id === action.product.id);
  if (action.product.cant == 1) {
    //buscar el indice por medio de un valor de campo
    cars.splice(index, 1);
  } else {
    cars[index]['cant']--;
  }
  return cars;
}

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

export default function CartReducer(state = initialStateCart, action) {

  if (action.type === "REMOVE_FROM_CART") {
    let cars = restItems([...state.cart], action);
    return {...state, cart: cars}
  } else if (action.type === "ADD_TO_CART") {
    let cars = AddItemCount([...state.cart], action);
    return Object.assign({}, state, {cart:cars})
    //return {...state, cart: cars};
  }
  return state;
}
