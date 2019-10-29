import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Wrapper from "../components/Wrapper/Wrapper";

export default class Home extends Component {
  render() {
    let mainPic = `<img className='main-picture' src=${require("../image/portrait.jpg")} alt='Smiley face' height='100' width='100'></img>`;
    return (
      <div>
        <Navbar />
        {/* <Jumbotron src={"https://i.imgur.com/H09wubk.png"} /> */}
        <Jumbotron myProp={mainPic} />
        <Wrapper>
          <h2 className="aboutme">About me</h2>
          <p>
            Graduated from University of Utah coding bootcamp on October 26,
            2019. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Wrapper>
      </div>
    );
  }
}
