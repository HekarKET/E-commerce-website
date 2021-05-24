import { setLogin } from "../constants/actionType";

export function loginStatus(state = false, action) {
  switch (action.type) {
    case setLogin:
      return !state;
    default:
      return state;
  }
}
