import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

class CartPage extends Component {
  componentDidMount() {
    if (this.props.selectedProduct.length === 0) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <Cart selectedProduct={this.props.selectedProduct}/>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedProduct: state.selectedProduct
  }
}

export default {
  component: withRouter(connect(mapStateToProps)(CartPage))
};