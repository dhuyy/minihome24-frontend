import axios from 'axios';
import { FETCH_PRODUCTS, SELECT_PRODUCT } from '../constants/actionTypes';
import { AWS_SERVER } from '../constants/apiConstants';

export const fetchProducts = () => async dispatch => {
  const request = await axios.get(`${AWS_SERVER.url}${AWS_SERVER.endpoints.products.getAll}`);

  dispatch({
    type: FETCH_PRODUCTS,
    payload: request
  });
};

export const selectProduct = (product) => async dispatch => {
  dispatch({
    type: SELECT_PRODUCT,
    payload: product
  });
};
