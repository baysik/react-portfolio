import React from "react";
import burger from "../../image/eattheburger.png";
import alphabet from "../../image/alphabet.png";
import "./style.css";

export default function Portfolio() {
  return (
    <div>
      <main class="container-aos">
        <section class="card">
          <img
            src={alphabet}
            className="portfolio-image"
            alt="alphabet game image"
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
              View
            </a>
          </div>
        </section>
        <section class="card" data-aos="fade-left">
          <img src={burger} className="portfolio-image" alt="burger"></img>
          <div>
            <h3>Eat da burger!</h3>
            <p>
              a simple app created using MySQL as the backend server, deployed
              on Heroku using JawsDB.
            </p>
            <a
              href="https://eat-da-burger-baysik.herokuapp.com/"
              class="view-button"
            >
              View
            </a>
          </div>
        </section>
        <section class="card" data-aos="fade-right">
          <img src={burger} className="portfolio-image" alt="burger"></img>
          <div>
            <h3>Project 3</h3>
            <p>
              Mollit fugiat ex nisi nostrud tempor qui consequat anim nulla
              labore nisi qui qui. Mollit fugiat ex nisi nostrud tempor qui
              consequat anim nulla labore nisi qui qui.
            </p>
            <a href="#" class="view-button">
              View
            </a>
          </div>
        </section>
        <section class="card" data-aos="fade-left">
          <img src={burger} className="portfolio-image" alt="burger"></img>
          <div>
            <h3>Project 4</h3>
            <p>
              Mollit fugiat ex nisi nostrud tempor qui consequat anim nulla
              labore nisi qui qui. Mollit fugiat ex nisi nostrud tempor qui
              consequat anim nulla labore nisi qui qui.
            </p>
            <a href="#" class="view-button">
              View
            </a>
          </div>
        </section>
        <section class="card" data-aos="fade-right">
          <img src={burger} className="portfolio-image" alt="burger"></img>
          <div>
            <h3>Project 5</h3>
            <p>
              Mollit fugiat ex nisi nostrud tempor qui consequat anim nulla
              labore nisi qui qui. Mollit fugiat ex nisi nostrud tempor qui
              consequat anim nulla labore nisi qui qui.
            </p>
            <a href="#" class="view-button">
              View
            </a>
          </div>
        </section>
        <section class="card" data-aos="fade-left">
          <img src={burger} className="portfolio-image" alt="burger"></img>
          <div>
            <h3>Project 6</h3>
            <p>
              Mollit fugiat ex nisi nostrud tempor qui consequat anim nulla
              labore nisi qui qui. Mollit fugiat ex nisi nostrud tempor qui
              consequat anim nulla labore nisi qui qui.
            </p>
            <a href="#" class="view-button">
              View
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
