import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import store from '../store.js';


const styles = {
  footer: {
    fontWeight: 'bold'
  }
}


class ShoppingCart extends Component {
  constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);
    //inicializamos car
    this.state = {
      cart: []
    };
    //suscribimos al strore para enterarnos de los cambios
    store.subscribe(()=>{
      //actualizar el estado local
      this.setState({
        cart: store.getState().cart
      });
    });
  }

  render() {
    return (
      <Panel header="Promo Cart">
        <Table fill>
          <tbody>
            {this.state.cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.cant}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right">${product.price * product.cant}</td>
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => this.removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${this.state.cart.reduce((sum, product) => sum + product.price * product.cant, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

      </Panel>
    )
  }

  removeFromCart(product) {

  }
}

export default ShoppingCart;
