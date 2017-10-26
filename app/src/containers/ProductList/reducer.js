
//definimos la funcion reductora recive dos parametros el estado actual y la accion
var cars = new Array();

const ProductListReducer = (state = initialState, action) => {
    if (action.type === "REPLACE_PRODUCTS") {
        //console.log(action.products.data);
        return {
            ...state,
            products: action.products
        };
    } else (action.type === "ADD_TO_CART") {

        cars = AddItemCount(cars, action);

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
