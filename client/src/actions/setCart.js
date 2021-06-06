import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART,
} from "../constants/actionType";

export const addToCart = (product) => {
  return function (dispatch, getStore) {
    product.selected = 1;
    dispatch({ type: ADD_TO_CART, payload: product });
    localStorage.setItem("cart", JSON.stringify(getStore().cart));
  };
};
export const removeFromCart = (id) => {
  return function (dispatch, getStore) {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
    localStorage.setItem("cart", JSON.stringify(getStore().cart));
  };
};
export const updateFromCart = (id, qty) => {
  return function (dispatch, getStore) {
    dispatch({ type: UPDATE_CART, payload: { id, qty } });
    localStorage.setItem("cart", JSON.stringify(getStore().cart));
  };
};
