import React, { Component } from 'react';

class Product extends Component {

  render() {
    return (
      <tr>
        <td>{ this.props.id }</td>
        <td>{ this.props.name }</td>
        <td>
          <span className="label label-success">
            { this.props.price } VNĐ
          </span>
        </td>
      </tr>
    );
  }
}

export default Product;