import React, { useRef, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Wrapper from "../components/Wrapper/Wrapper";

import { TweenMax, Power3 } from "gsap";

export default function Home() {
  let mainPic = `<img id='main-picture' src=${require("../image/portrait.jpg")} alt='Smiley face' height='100' width='100'></img>`;
  let pAnimation = useRef(null);
  let pAnimation2 = useRef(null);
  let pAnimation3 = useRef(null);

  useEffect(() => {
    console.log(pAnimation);
    TweenMax.from([pAnimation, pAnimation2, pAnimation3], 2.5, {
      opacity: 1,
      y: 50,
      ease: Power3.easeOut,
      delay: 0.2
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Jumbotron
        myProp={mainPic}
        h1={"Gene Bay"}
        firstP={"Web dev."}
        secondP={"HTML - CSS - Javascript"}
        button={"My Work"}
      />
      <Wrapper>
        <h2 ref={el => (pAnimation3 = el)} className="aboutme">
          About me
        </h2>
        <p ref={el => (pAnimation2 = el)}>
          I'm Gene, a graduate from University of Utah Web Development Program,
          based in Salt Lake City, Utah.
          {/* October 26, 2019.*/}
        </p>
        <div ref={el => (pAnimation = el)}>
          <p>
            Ever since childhood, I've had a commanding interest in software
            development. I've dabbled in many different languages but in 2019 I
            decided web development was the path for me with HTML5, CSS, and
            Javascript being the tools I rely on.
            {/* Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. */}
          </p>
          <p>
            Though my primary focus will always be web development, that does
            not mean it is my singular and sole interest. I'm never afraid to
            branch out and learn something new if the task demands it. In fact,
            I believe it to be a neccesity in terms of personal growth.
          </p>
        </div>
      </Wrapper>
    </div>
  );
}
