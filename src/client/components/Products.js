import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Products extends Component {
  constructor(props) {
    super(props);
  }

  onClickProduct(product) {
    this.props.selectProduct(product)
        .then(() => this.props.history.push('/cart'))
        .catch((err) => console.error(err));
  }

  renderProducts() {
    return this.props.products.map(product => {
      return (
        <div key={product._id} className="product-box">
          <div className="point-click product" onClick={() => {this.onClickProduct(product)}}/>
          <img src={product.picture} className="product-image" alt="Product Image"/>
          <p className="product-name">{product.name}</p>
          <p className="product-price">ab {product.price}.00 &#8364;</p>
          <img src="images/product-delivery-stars.png" className="product-delivery-stars" alt="Delivery & Stars"/>
        </div>
      );
    });
  }

  render() {
    return(
      <div className="products-wrapper">
        <img src="images/sidebar.png" alt="Sidebar"/>
        <div className="products-content-wrapper">
          <img src="images/products_header.png" className="product-header" alt="Products Header"/>
          <div className="products-wrapper">
            {this.renderProducts()}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Products);