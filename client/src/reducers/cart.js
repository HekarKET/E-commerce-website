import {
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
} from "../constants/actionType";

const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const initialState = cartItems;

export function cart(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter((state) => state._id !== action.payload);
    case UPDATE_CART:
      return state.map((item) => {
        if (item._id !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          selected: action.payload.qty,
        };
      });
    default:
      return state;
  }
}
