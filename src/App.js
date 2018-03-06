import React, { Component } from 'react';
import Product from './components/Product';
import './App.css';

class App extends Component {
  render() {
    var productList = [
      {
        name : 'Iphone 6',
        price : 15000000,
        image : 'images/iPhone6rosegold.png'
      },
      {
        name : 'Iphone 6 plus',
        price : 18000000,
        image : 'images/iPhone6rosegold.png'
      },
      {
        name : 'Iphone 7',
        price : 20000000,
        image : 'images/iPhone6rosegold.png'
      }
    ];

    return (
      <div className="App">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand">Title</a>
            <ul className="nav navbar-nav">
              <li className="active">
                <a>Home</a>
              </li>
              <li>
                <a>Link</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            {
              productList.map(function(product, index) {
                return <Product 
                  name = { product.name }
                  price = { product.price }
                  image = { product.image } 
                  key  = { index }
                />;
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
