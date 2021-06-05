import {
  CREATE_USER,
  CREATE_USER_SUCCESS,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
} from "../constants/actionType";

import Cookie from "js-cookie";

const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {
  login: userInfo ? true : false,
  user: userInfo,
  isAuth: userInfo ? true : false,
};

export function userLogin(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        login: false,
        user: {},
      };
    case USER_LOGIN_SUCCESS:
      return {
        login: true,
        user: action.payload,
        isAuth: true,
      };
    case CREATE_USER:
      return {
        login: false,
        user: {},
      };
    case CREATE_USER_SUCCESS:
      return {
        login: true,
        user: action.payload,
        isAuth: true,
      };
    default:
      return state;
  }
}
