import loginStatus from "../reducers/loginStatus";
export function setLogin() {
  return {
    type: loginStatus,
  };
}
