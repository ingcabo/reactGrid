import axios from 'axios';

export const loadProducst = () =>{
    const products = [
      { id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
      { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
      { id: 3, name: "Underground Max", price: 145, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
      { id: 4, name: "Underground Max", price: 143, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
      { id:10, name: "Underground Max", price: 75, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
      { id:11, name: "Underground Max", price: 86, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
      { id:13, name: "Underground Max", price: 34, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
      { id:143, name: "Underground Max", price: 56, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
      { id:142, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
      { id:141, name: "Underground Max", price: 34, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
      { id:147, name: "Underground Max", price: 12, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
      { id:140, name: "Underground Max", price: 37, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" }
    ];
    return {
        type: "REPLACE_PRODUCTS",
        products:products
    };
};

/*
consumir API REst
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
};
*/
export const addToCart = (product) => {

    return {
        type: "ADD_TO_CART",
        product:product
    }
};
