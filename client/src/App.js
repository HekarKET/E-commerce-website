import React from "react";
// eslint-disable-next-line
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import Rating from "./components/Product/Rating";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/product/:id" component={Product}></Route>
          <Route path="/review/:id" component={Rating}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
