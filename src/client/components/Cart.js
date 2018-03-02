import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {
  render() {
    return (
      <div className="cart-wrapper">
        <form className="form-coupon">
          <input type="text"/>
          <div className="point-click coupon" />
        </form>
        <Link to="/orders" className="point-click cart" />
        <div className="selected-product-wrapper">
          <div className="product-picture-name">
            <p>{this.props.selectedProduct.name}</p>
            <img src={this.props.selectedProduct.picture} alt=""/>
          </div>
          <div className="cart-product-price">
            <div>
              <p>Subtotal:</p>
              <p>Discount:</p>
              <p>Total:</p>
            </div>
            <div>
              <p>{this.props.selectedProduct.price}.00 &#8364;</p>
              <p>0 %</p>
              <p>{this.props.selectedProduct.price}.00 &#8364;</p>
            </div>
          </div>
        </div>
        <img src="images/cart-content.png" alt="Cart"/>
      </div>
    );
  }
}

export default Cart;