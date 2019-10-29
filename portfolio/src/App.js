import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
// import Jumbotron from "./components/Jumbotron/Jumbotron";
// import Navbar from "./components/Navbar/Navbar";
// import Jumbotron from "./components/Jumbotron/Jumbotron";
// import Wrapper from "./components/Wrapper/Wrapper";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </Router>
      </div>
    );
  }
}
