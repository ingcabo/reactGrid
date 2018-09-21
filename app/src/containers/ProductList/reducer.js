//definimos la funcion reductora recive dos parametros el estado actual y la accion

export const initialStateProducts = []
export default function ProductListReducer(state = initialStateProducts , action) {
    if (action.type === "REPLACE_PRODUCTS") {
        const  products  = action.Products
        return products
    }
    return state
}
