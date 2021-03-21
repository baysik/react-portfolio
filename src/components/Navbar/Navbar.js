import React, { useRef, useEffect } from "react";
import { TweenMax, Power3 } from "gsap";
import "./style.css";

export default function Navbar() {
  let navSlide = useRef(null);
  let navSlide2 = useRef(null);
  // let navSlide3 = useRef(null);
  useEffect(() => {
    console.log(navSlide);
    TweenMax.from([navSlide, navSlide2], 2, {
      opacity: 0,
      x: 50,
      ease: Power3.easeOut,
      delay: 0.2
    });
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          GB
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item" ref={el => (navSlide = el)}>
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item" ref={el => (navSlide2 = el)}>
              <a className="nav-link" href="/portfolio">
                Portfolio
              </a>
            </li>
            {/* <li className="nav-item" ref={el => (navSlide3 = el)}>
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}
