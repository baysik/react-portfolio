import React, { Component, useRef, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Wrapper from "../components/Wrapper/Wrapper";

import { TweenMax, Power3 } from "gsap";

// export default class Home extends Component {
//   render() {
//     let mainPic = `<img className='main-picture' src=${require("../image/portrait.jpg")} alt='Smiley face' height='100' width='100'></img>`;
//     let pAnimation = useRef(null);

//     useEffect(() => {
//       console.log(pAnimation);
//       TweenMax.to(pAnimation, 2, {
//         opacity: 1,
//         y: 15,
//         ease: Power3.easeOut
//       });
//     }, []);
//     return (
//       <div>
//         <Navbar />
//         <Jumbotron
//           myProp={mainPic}
//           h1={"Gene Bay"}
//           firstP={"Web dev."}
//           secondP={"HTML - CSS - Javascript"}
//           button={"My Work"}
//         />
//         <Wrapper>
//           <h2 className="aboutme">About me</h2>
//           <p>
//             Graduated from University of Utah Web Development Program - October
//             26, 2019.
//           </p>
//           <p ref={el => (pAnimation = el)}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </p>
//         </Wrapper>
//       </div>
//     );
//   }
// }

export default function Home() {
  let mainPic = `<img className='main-picture' src=${require("../image/portrait.jpg")} alt='Smiley face' height='100' width='100'></img>`;
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
          Graduated from University of Utah Web Development Program - October
          26, 2019.
        </p>
        <p ref={el => (pAnimation = el)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Wrapper>
    </div>
  );
}
