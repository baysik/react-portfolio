import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
// import Wrapper from "./components/Wrapper/Wrapper";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
      </div>
    );
  }
}
