import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, selectProduct } from "../actions";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Products from '../components/Products';

class ProductsPage extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="main-wrapper">
        <Header />
        <Products products={this.props.products} selectProduct={this.props.selectProduct}/>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

function loadData(store) {
  return store.dispatch(fetchProducts());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchProducts, selectProduct })(ProductsPage)
};