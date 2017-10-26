import React, { Component } from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
import store from '../../lib/store.js';
import {  removeFromCart } from '../../actions/actionCreators.js';
import { connect } from 'react-redux';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}

class ShoppingCart extends Component {

/*ya utilizamos react react-redux y no neceiso en constructor se utiliza mapStateToProps para llevar el estado inicial */

  constructor() {
    super();
      //actualizar el estado local
      store.subscribe(()=>{
       //actualizar el estado local
       this.setState({
         cart: store.getState().cart
       });
     });
  }

  render() {
    //  console.log(this.props.cart); {Math.random( 100, 10)
    return (
      <Panel header="Promo Cart">

        <Table fill>
          <tbody>
            {this.props.cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.cant}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right">${product.price * product.cant}</td>
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => this.props.removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
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

const mapStateToProps = (state) =>{
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch =>{
  return{
    removeFromCart(product){
      dispatch(removeFromCart(product));
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);
