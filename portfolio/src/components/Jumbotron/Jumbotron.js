import React from "react";
import "./style.css";

export default function Jumbotron(props) {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          {/* <img src={props.src} alt="Smiley face" height="100" width="100"></img> */}
          {/* {props.src} */}
          <div dangerouslySetInnerHTML={{ __html: props.myProp }}></div>
          <h1 className="main-header">{props.h1}</h1>
          <p className="lead">{props.firstP}</p>
          <p className="lead">{props.secondP}</p>
          {/* <button className="jumbo-button">{props.button}</button> */}
        </div>
      </div>
    </div>
  );
}
