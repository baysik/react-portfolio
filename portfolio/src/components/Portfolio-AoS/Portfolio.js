import React from "react";
import burger from "../../image/eattheburger.png";
import alphabet from "../../image/alphabet.png";
import friendfinder from "../../image/friendfinder.png";
import crystalcollector from "../../image/crystal collector.png";
import "./style.css";

export default function Portfolio() {
  return (
    <div>
      <main class="container-aos">
        {/* card one */}
        <section class="card">
          <img
            src={alphabet}
            className="portfolio-image"
            alt="alphabet game"
          ></img>
          <div>
            <h3>Alphabet Game</h3>
            <p>A children's alphabet learning game.</p>
            <p>Created by utilizing the giphy and dictionary API's.</p>
            <a
              href="https://kyleruff1.github.io/WDJSChildrensBook/"
              target="_blank"
              class="view-button"
            >
              Live
            </a>
            <a
              href="https://github.com/kyleruff1/WDJSChildrensBook"
              target="_blank"
              class="view-button"
            >
              Github
            </a>
          </div>
        </section>
        {/* card two */}
        <section class="card" data-aos="fade-left">
          <img
            src={burger}
            className="portfolio-image"
            alt="eat da burger"
          ></img>
          <div>
            <h3>Eat da burger!</h3>
            <p>
              A simple app created using MySQL as the backend server, deployed
              on Heroku using JawsDB.
            </p>
            <a
              href="https://eat-da-burger-baysik.herokuapp.com/"
              class="view-button"
            >
              View
            </a>
            <a
              href="https://github.com/baysik/eat-da-burger"
              target="_blank"
              class="view-button"
            >
              Github
            </a>
          </div>
        </section>
        {/* card 3 */}
        <section class="card" data-aos="fade-left">
          <img
            src={friendfinder}
            className="portfolio-image"
            alt="friend finder"
          ></img>
          <div>
            <h3>Friend Finder</h3>
            <p>
              A survey created using Node.js and Express to find you the best
              match based on your results.
            </p>
            <a
              href="https://friendfinder-baysik-v2.herokuapp.com/"
              class="view-button"
            >
              View
            </a>
            <a
              href="https://github.com/baysik/FriendFinder"
              target="_blank"
              class="view-button"
            >
              Github
            </a>
          </div>
        </section>
        {/* card four */}
        <section class="card" data-aos="fade-left">
          <img
            src={crystalcollector}
            className="portfolio-image"
            alt="crystal collector"
          ></img>
          <div>
            <h3>Crystal Collector</h3>
            <p>
              a simple app created using MySQL as the backend server, deployed
              on Heroku using JawsDB.
            </p>
            <a href="https://baysik.github.io/unit-4-game/" class="view-button">
              View
            </a>
            <a
              href="https://github.com/baysik/unit-4-game"
              target="_blank"
              class="view-button"
            >
              Github
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
