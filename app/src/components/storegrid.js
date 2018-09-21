import React, { Component } from "react"
import { Navbar, Grid, Row, Col } from "react-bootstrap"
import ProductList from "../containers/ProductList/ProductList.js"
import ShoppingCart from "../containers/car/ShoppingCart.js"

import "./global/css/store.css"

class storegrid extends Component {
    render() {
    //<ShoppingCart />
    /*  <Col sm={4}>
       </Col>*/
        return (
            <div>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <ProductList />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default storegrid
