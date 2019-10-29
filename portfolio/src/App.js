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
        {/* <Navbar />
        <Jumbotron />
        <Wrapper>
          <h2 className="aboutme">About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Wrapper> */}
      </div>
    );
  }
}
