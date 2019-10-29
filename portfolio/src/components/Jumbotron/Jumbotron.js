import React from "react";
import "./style.css";

export default function Jumbotron(props) {
  console.log(props.src);
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          {/* <img src={props.src} alt="Smiley face" height="100" width="100"></img> */}
          {/* {props.src} */}
          <div
            className="mainPic"
            dangerouslySetInnerHTML={{ __html: props.myProp }}
          ></div>
          <h1 className="jumboname">Gene Bay</h1>
          <p className="lead">Web dev.</p>
          <p className="lead">HTML - CSS - Javascript</p>
          {/* <p className="lead">University of Utah Coding Bootcamp</p>
          <p className="lead">graduate 10/26/2019</p> */}
        </div>
      </div>
    </div>
  );
}
