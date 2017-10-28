//definimos la funcion reductora recive dos parametros el estado actual y la accion
console.log('Product Reducer')
export const initialStateProducts = {
  products: []
};

export default function ProductListReducer(state = initialStateProducts, action) {
  if (action.type === "REPLACE_PRODUCTS") {
    //console.log(action.products.data);
    return {...state, products:action.products}
  }
  return state;
}
