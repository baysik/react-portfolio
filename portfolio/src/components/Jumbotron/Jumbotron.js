import React, { useRef, useEffect } from "react";
import "./style.css";
import { TweenMax, Power3 } from "gsap";

export default function Jumbotron(props) {
  //   let jumboAnimation = useRef(null);

  //   useEffect(() => {
  //     console.log(jumboAnimation);
  //     TweenMax.from(jumboAnimation, 2, {
  //       opacity: 1,
  //       y: 50,
  //       ease: Power3.easeOut
  //     });
  //   }, []);

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
          <h1>
            <a class="fab fa-github" href="https://github.com/baysik/"></a>
          </h1>
        </div>
      </div>
    </div>
  );
}
