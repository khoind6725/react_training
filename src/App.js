import React, { Component } from 'react';
import Product from './components/Product';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products : [
        {
          id : 1,
          name: 'Iphone 5',
          price: '5.000.000',
          isActive: false
        },
        {
          id : 2,
          name: 'Iphone 6',
          price: '15.000.000',
          isActive: true
        },
        {
          id : 3,
          name: 'Iphone X',
          price: '25.000.000',
          isActive: true
        }
      ],
      isActive: true
    }
  }

  onSetState = (str) => {
    console.log(str)
    this.setState({
      isActive : !this.state.isActive
    })
  }

  render() {
    if( this.state.isActive ) {
      var product = this.state.products
                    .filter(product => product.isActive === true)
                    .map((product, index) => {
                      return <Product 
                        id = { product.id } 
                        name = { product.name } 
                        price = { product.price }
                        key = { index }
                      />
                    });
    }

    return (
      <div className="App">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand">State</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên Sản Phẩm</th>
                  <th>Giá</th>
                </tr>
              </thead>
              <tbody>
                { product }
              </tbody>
            </table>
            <button type="button" className="btn btn-warning" onClick={ () => this.onSetState(this.state.isActive) }>
              Active: { this.state.isActive === true ? 'true' : 'false' }
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
