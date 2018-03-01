import axios from 'axios';
import { FETCH_PRODUCTS } from '../constants/actionTypes';
import { AWS_SERVER } from '../constants/apiConstants';

export const fetchProducts = () => async dispatch => {
  const request = await axios.get(`${AWS_SERVER.url}${AWS_SERVER.endpoints.products}`);

  dispatch({
    type: FETCH_PRODUCTS,
    payload: request
  });
};