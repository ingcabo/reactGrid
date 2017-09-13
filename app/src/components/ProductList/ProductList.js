import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import store from '../store.js'

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 15,
    marginRight: 15

  }
};

class ProductList extends Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      products: [
        { id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
        { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
        { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
        { id: 4, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
        { id:10, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
        { id:11, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" }
      ]
    }
  }

  render() {
    return (
      <div style={styles.products}>
        {this.state.products.map(product =>
          <div className="thumbnail" style={styles.product} key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <Button bsStyle="primary" onClick={() => this.addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  addToCart(product) {
    //pasamos un acton que es un objeto de 2 parametros
    store.dispatch({
      type: "ADD_TO_CART",
      product
    //product: product
    })
  }
}

export default ProductList;
