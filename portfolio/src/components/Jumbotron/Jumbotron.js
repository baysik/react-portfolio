import React, { Component } from "react";
import "./style.css";

export default class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <img
              src="https://i.imgur.com/H09wubk.png"
              alt="Smiley face"
              height="100"
              width="100"
            ></img>
            <h1 class="jumboname">Gene Bay</h1>
            <p class="lead">Web dev.</p>
            <p class="lead">University of Utah Coding Bootcamp</p>
            <p class="lead">graduate 10/26/2019</p>
          </div>
        </div>
      </div>
    );
  }
}
