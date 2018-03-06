import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
        <div className="thumbnail">
          <img src={ this.props.image } alt={ this.props.name }></img>
          <div className="caption">
            <h4>{ this.props.name }</h4>
            <p>
              { this.props.price } VNĐ
            </p>
            <p>
              <a className="btn btn-primary">Mua hàng</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;