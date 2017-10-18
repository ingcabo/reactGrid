import axios from 'axios';

export const loadProducst = () =>{
    return dispatch => {
      return axios.get("http://127.0.0.1/dbservice/products")
      .then(response => {
        dispatch({
          type: "REPLACE_PRODUCTS",
          products: response.data
        })
      });
    };
}

export const addToCart = (product) => {

    return {
        type: "ADD_TO_CART",
        product:product
    }
};

export const removeFromCart = (product) => {

        return {
            type: "REMOVE_FROM_CART",
            product
        }
    }
