import axios  from "axios"
import API from "../../apis/api"

const REPLACEPRODUCTS = "REPLACE_PRODUCTS"
const ADDTOCART = "ADD_TO_CART"

export function loadProducst() {

    return (dispatch, getState) => {
        API.get("Products/")
            .then((response) => {
                dispatch( { type: REPLACEPRODUCTS, Products: response.data.data } )
            })
    }

}

export const addToCart = (product) => {
    return {
        type: ADDTOCART,
        product
    }
}
