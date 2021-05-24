import React from "react";
// eslint-disable-next-line
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route to="/" exact component={Home}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
