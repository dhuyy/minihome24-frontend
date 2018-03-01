import React from 'react';
import ProductsPage  from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import OrdersPage from './pages/OrdersPage';

export default [
  {
    ...ProductsPage,
    path: '/',
    exact: true
  },
  {
    ...CartPage,
    path: '/cart',
  },
  {
    ...OrdersPage,
    path: '/orders',
  }
]
