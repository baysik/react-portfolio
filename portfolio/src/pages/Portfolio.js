import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Flexbox from "../components/Flexbox/Flexbox";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron
          h1={"Gene Bay"}
          firstP={"Web dev."}
          secondP={"HTML - CSS - Javascript"}
        />
        <Flexbox />
      </div>
    );
  }
}
