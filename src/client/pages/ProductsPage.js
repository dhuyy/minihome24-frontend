import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from "../actions";

class ProductsPage extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProducts() {
    return this.props.products.map(product => {
      return <li key={product._id}>{product.name}</li>;
    });
  }

  render() {
    return (
        <div>
          Here's a big list of products:
          <ul>
            {this.renderProducts()}
          </ul>
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
  component: connect(mapStateToProps, { fetchProducts })(ProductsPage)
};