import React from "react";
import "../css/proj.css";
import PhotoOne from "../img/login.webp";
import PhotoTwo from "../img/csswebsite.webp";
import PhotoThree from "../img/beactiv.webp";
import PhotoFour from "../img/qtscreen.webp"
function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="collection">
        <div className="individual-project-container">
          <div className="img-container">
            <img src={PhotoOne} alt="screenshot" />
          </div>
          <p>A register and login website <br/>Created with: React, Express, MongoDB</p>
          <a href="https://login-website-ta.herokuapp.com/">View Website</a>
        </div>
        <div className="individual-project-container">
          <div className="img-container">
            <img src={PhotoTwo} alt="screenshot" />
          </div>
          <p>A CSS photo blog template <br /> Created with: React and CSS</p>
          <a href="https://css-website-practice.netlify.app/">View Website</a>
        </div>
        <div className="individual-project-container">
          <div className="img-container">
            <img src={PhotoThree} alt="screenshot" />
          </div>
          <p>
            BEACTIV  <br /> Project built while attending Bootcamp <br />
            Find out where to do free sport in Barcelona <br/>
            Created with: React, Express, MongoDB.
          </p>

          <a href="https://beactiv.surge.sh/">View Website</a>
        </div>
        <div className="individual-project-container">
          <div className="img-container">
            <img src={PhotoFour} alt="screenshot" />
          </div>
          <p>
            Quietly Thriving <br />
            Introvert Coaching Landing Page <br/>
            Created with: React & Css.
          </p>

          <a href="http://nataschahenriksen.surge.sh/">View Website</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
