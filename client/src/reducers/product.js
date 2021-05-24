import { FETCH_DATA, FETCH_SUCCESS } from "../constants/actionType";

const intialState = {
  loading: true,
  product: [],
  error: false,
};

export function Product(state = intialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        loading: true,
        product: [],
        error: false,
      };
    case FETCH_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        error: false,
      };

    default:
      return state;
  }
}
