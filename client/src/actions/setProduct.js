import { fetchProductApi } from "../api";
import { FETCH_DATA, FETCH_SUCCESS } from "../constants/actionType";

export const fetchProduct = () => {
  return function (dispatch) {
    dispatch({ type: FETCH_DATA });
    fetchProductApi()
      .then((data) => {
        console.log(data);
        dispatch({ type: FETCH_SUCCESS, payload: data.data, loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
