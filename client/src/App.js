import React from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Rating from "./components/Product/Rating";
import signUp from "./components/Sign/SignUp/signUp";
import SignIn from "./components/Sign/SignIn/SignIn";
import Profile from "./components/Profile/Profile";
import { useSelector } from "react-redux";
function App() {
  const auth = useSelector((state) => state.userLogin.isAuth);
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/product/:id" component={Product}></Route>
          <Route path="/review/:id" component={Rating}></Route>
          <Route path="/register" component={signUp}></Route>
          <Route path="/login" component={SignIn}></Route>
          <Route
            path="/profile"
            component={() => <Profile isAuth={auth} />}
          ></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
