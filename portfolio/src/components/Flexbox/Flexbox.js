import React, { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";
import "./style.css";
import placeholder from "../../image/placeholder.jpg";

export default function Flexbox() {
  let app1 = useRef(null);
  let image1 = useRef(null);
  let image2 = useRef(null);
  let image3 = useRef(null);
  let image4 = useRef(null);
  let image5 = useRef(null);
  let image6 = useRef(null);

  // inefficient way to handle expands go here
  const handleExpand1 = () => {
    TweenMax.to(image1, 0.8, {
      width: 370,
      height: 255,
      opacity: 1,
      ease: Power3.easeOut
    });
  };
  const handleExpand2 = () => {
    TweenMax.to(image2, 0.8, {
      width: 370,
      height: 255,
      opacity: 1,
      ease: Power3.easeOut
    });
  };
  const handleExpand3 = () => {
    TweenMax.to(image3, 0.8, {
      width: 370,
      height: 255,
      opacity: 1,
      ease: Power3.easeOut
    });
  };
  const handleExpand4 = () => {
    TweenMax.to(image4, 0.8, {
      width: 370,
      height: 255,
      opacity: 1,
      ease: Power3.easeOut
    });
  };
  const handleExpand5 = () => {
    TweenMax.to(image5, 0.8, {
      width: 370,
      height: 255,
      opacity: 1,
      ease: Power3.easeOut
    });
  };
  const handleExpand6 = () => {
    TweenMax.to(image6, 0.8, {
      width: 370,
      height: 255,
      opacity: 1,
      ease: Power3.easeOut
    });
  };

  // inefficient way to handle shrinks go here
  const handleShrink1 = () => {
    TweenMax.to(image1, 0.8, {
      width: 355,
      height: 240,
      opacity: 0.75,
      ease: Power3.easeOut
    });
  };
  const handleShrink2 = () => {
    TweenMax.to(image2, 0.8, {
      width: 355,
      height: 240,
      opacity: 0.75,
      ease: Power3.easeOut
    });
  };
  const handleShrink3 = () => {
    TweenMax.to(image3, 0.8, {
      width: 355,
      height: 240,
      opacity: 0.75,
      ease: Power3.easeOut
    });
  };
  const handleShrink4 = () => {
    TweenMax.to(image4, 0.8, {
      width: 355,
      height: 240,
      opacity: 0.75,
      ease: Power3.easeOut
    });
  };
  const handleShrink5 = () => {
    TweenMax.to(image5, 0.8, {
      width: 355,
      height: 240,
      opacity: 0.75,
      ease: Power3.easeOut
    });
  };
  const handleShrink6 = () => {
    TweenMax.to(image6, 0.8, {
      width: 355,
      height: 240,
      opacity: 0.75,
      ease: Power3.easeOut
    });
  };
  useEffect(() => {
    TweenMax.to(app1, 0, { css: { visibility: "visible" } });
    // TweenMax.to(app2, 0, { css: { visibility: "visible" } });
    TweenMax.staggerFrom(
      [image1, image2, image3, image4, image5, image6],
      0.8,
      { opacity: 0, x: 40, ease: Power3.easeOut },
      0.2
    );
  }, []);

  return (
    <div className="container" id="portfolio-container" ref={el => (app1 = el)}>
      <div className="container-flex">
        <div className="boxes">
          {/* w: 355 - h: 240 */}
          <img
            className="portfolio-image"
            src={placeholder}
            ref={el => (image1 = el)}
            onMouseEnter={handleExpand1}
            onMouseLeave={handleShrink1}
          ></img>
          {/* <h3>Alphabet Game</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
        </div>
        <div className="boxes">
          <img
            className="portfolio-image"
            src={placeholder}
            ref={el => (image2 = el)}
            onMouseEnter={handleExpand2}
            onMouseLeave={handleShrink2}
          ></img>
          {/* <h3>Crystal Collector</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
        </div>
        <div className="boxes">
          <img
            className="portfolio-image"
            src={placeholder}
            ref={el => (image3 = el)}
            onMouseEnter={handleExpand3}
            onMouseLeave={handleShrink3}
          ></img>
          {/* <h3>Giftastic</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
        </div>
      </div>
      <div className="container-flex">
        <div className="boxes">
          <img
            className="portfolio-image"
            src={placeholder}
            ref={el => (image4 = el)}
            onMouseEnter={handleExpand4}
            onMouseLeave={handleShrink4}
          ></img>
          {/* <h3>Train Scheduler</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p> */}
        </div>
        <div className="boxes">
          <img
            className="portfolio-image"
            src={placeholder}
            ref={el => (image5 = el)}
            onMouseEnter={handleExpand5}
            onMouseLeave={handleShrink5}
          ></img>
          {/* <h3>Trivia Game</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p> */}
        </div>
        <div className="boxes">
          <img
            className="portfolio-image"
            src={placeholder}
            ref={el => (image6 = el)}
            onMouseEnter={handleExpand6}
            onMouseLeave={handleShrink6}
          ></img>
          {/* <h3>Box three</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p> */}
        </div>
      </div>
    </div>
  );
}
