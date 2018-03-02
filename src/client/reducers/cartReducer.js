import { SELECT_PRODUCT } from "../constants/actionTypes";

export default (state = [], action) => {
  switch(action.type) {
    case SELECT_PRODUCT:
      return action.payload;

    default:
      return state;
  }
}
