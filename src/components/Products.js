import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

class Products extends Component {
    render() {
        let products = [
            {
                id: 1,
                slug: 'iphone',
                name: 'Iphone X',
                price: 25000000
            },
            {
                id: 2,
                slug: 'samsung',
                name: 'Samsung S7',
                price: 15000000
            },
            {
                id: 3,
                slug: 'oppo',
                name: 'Oppo F5',
                price: 7000000
            }
        ]

        let { match } = this.props;
        let url = match.url;

        let result = products.map((product, index) => {
            return (
                <NavLink to={`${url}/${product.slug}`} key={index}>
                    <li className="list-group-item">
                        {product.id} - {product.name} - {product.price}
                    </li>
                </NavLink>
            );
        })

        return (
            <div className="container">
                <h1>Danh sách sản phẩm</h1>
                <div className="row">
                    <ul className="list-group">
                        {result}
                    </ul>
                </div>
                <div className="row">
                    <Route path="/products/:name" component={Product}></Route>
                </div>
            </div>
        );
    }
}

export default Products;