import React  from 'react'
//var React = require("react")
import { connect } from "react-redux"
import  {push}  from "react-router-redux"
import { Button, Glyphicon, Table, Pagination } from "react-bootstrap"
import {  addToCart } from "./actions.js"

const styles = {
    products: {
        margin: "50px",
        display: "flex",
        alignItems: "stretch",
        flexWrap: "wrap"
    },
    product: {
        width: "220px",
        marginLeft: 10,
        marginRight: 10
    },
    paginationLing:{
        marginLeft: "400px"
    }
}

const ProductList = ({ products, addToCart, page, changePage}) => {

    // pagination

    const per_page = 8
    const pages = Math.ceil(products.length / per_page)
    const start_offset = (page - 1) * per_page
    let start_count = 0

    return (
        <div>
            <div style={styles.products}>
                {
                    products.map((product,index) => {
                        if (index >= start_offset && start_count < per_page) {
                            start_count++
                            return(
                                <div className="thumbnail" style={styles.product} key={product.id}>
                                    <img src={product.image} alt={product.name} />
                                    <div className="caption">
                                        <h4>{product.name}</h4>
                                        <p>
                                            <Button bsStyle="primary" onClick={() => addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    })}
            </div>
            <div style={styles.paginationLing}>
                <Pagination className="pagination pull-center" bsSize="medium" maxButtons={10} first last next
                    prev boundaryLinks items={pages} activePage={page} onSelect={changePage}/>
            </div>
        </div>
    )
}

const mapStateToProps = (state,page) => {
    return {
        products: state.products,
        page: Number(state.routing.locationBeforeTransitions.query.page) || 1
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart(product) {
            dispatch(addToCart(product))
        },
        changePage(page) {
            dispatch(push("store?page=" + page))
        }
    }
}
//https://github.com/catalin-luntraru/redux-minimal
//https://github.com/catalin-luntraru/redux-minimal/blob/master/src_users/components/common/UserList.js
//https://www.youtube.com/watch?v=2qxNVzmiR8Y
//https://github.com/react-boilerplate/react-boilerplate/issues/1380
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
