import { createUserApi, loginUserApi } from "../api";
import Cookie from "js-cookie";
import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
} from "../constants/actionType";

export const userLogin = (user) => {
  return function (dispatch) {
    dispatch({ type: USER_LOGIN });

    loginUserApi(user)
      .then((data) => {
        Cookie.set("userInfo", JSON.stringify(data));
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data.data, login: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const createUser = (user) => {
  return function (dispatch) {
    dispatch({ type: CREATE_USER });
    createUserApi(user)
      .then((data) => {
        Cookie.set("userInfo", JSON.stringify(data));
        dispatch({
          type: CREATE_USER_SUCCESS,
          payload: data.data,
          login: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
