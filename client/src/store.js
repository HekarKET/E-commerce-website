import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginStatus } from "./reducers/loginStatus";
import { Product } from "./reducers/product";


const combineReducer = combineReducers({
  loginStatus,
  Product,
});
export const store = createStore(
  combineReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
