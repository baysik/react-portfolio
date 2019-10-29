import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
      </div>
    );
  }
}
