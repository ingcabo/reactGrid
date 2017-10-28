import React, {Component} from 'react';
import {Panel, Table, Button, Glyphicon} from 'react-bootstrap';
import {removeFromCart} from './actions.js';
import {connect} from 'react-redux';


const styles = {
  footer: {
    fontWeight: 'bold'
  }
}

class ShoppingCart extends Component {
  /*ya utilizamos react react-redux y no neceiso en constructor se utiliza mapStateToProps para llevar el estado inicial */
  constructor(props) {
    super(props);
  }

  render() {
    const {cart} = this.props
    return (
      <Panel header="Promo Cart">
        <Table fill>
          <tbody>
          {cart.map(product =>
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.cant}</td>
              <td className="text-right">${product.price}</td>
              <td className="text-right">${product.price * product.cant}</td>
              <td className="text-right"><Button bsSize="xsmall" bsStyle="danger"
                                                 onClick={() => this.props.removeFromCart(product)}><Glyphicon
                glyph="trash"/></Button></td>
            </tr>
          )}
          </tbody>
          <tfoot>
          <tr>
            <td colSpan="4" style={styles.footer}>
              Total: ${this.props.cart.reduce((sum, product) => sum + product.price * product.cant, 0)}
            </td>
          </tr>
          </tfoot>
        </Table>
      </Panel>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(product){
      dispatch(removeFromCart(product));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
