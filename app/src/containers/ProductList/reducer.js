//definimos la funcion reductora recive dos parametros el estado actual y la accion

export default function ProductListReducer(state = {}, action) {
  if (action.type === "REPLACE_PRODUCTS") {
    //console.log(action.products.data);
    const products  = action.products;
    return products;
  }
    return state;
}
