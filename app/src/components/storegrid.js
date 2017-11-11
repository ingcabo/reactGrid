import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import ProductList from '../containers/ProductList/ProductList.js';
import ShoppingCart from '../containers/car/ShoppingCart.js';

import './global/css/store.css'


class storegrid extends Component {
   render() {
     return (
       <div>
        <Grid>
          <Row>
            <Col sm={8}>
              <ProductList />
            </Col>
            <Col sm={4}>
              <ShoppingCart />
            </Col>
          </Row>
        </Grid>
       </div>
     );
   }
}

export default storegrid;
