import React from "react";
// import Proj from "./proj";
import Photo from "../img/profile-picture.jpeg";
import Header from "./Header"
import "../css/about.css";

export default function About() {
  return (
    <div className="main-container">
      <Header/>
      <div className="intro">
        <img src={Photo} alt="tove adamsson" />
        <div className="about-me-text">
          <p>
            {" "}
            Hi there, My name is Tove 👋 I'm a software engineer from Sweden 🇸🇪
            living in Barcelona 🇪🇸! My interest for programming started a couple
            of years ago. With the opportunity presenting itself during the
            start of the pandemic, I took the leap of joining a Full-Stack JS
            bootcamp in Barcelona. Since then, I have done a lot of studying and
            I've worked as a merchant integrations engineer at Bolt One-Click
            checkout in their eCommerce team! Knowing that not everything has to
            be known by heart, but that one has the ability and urge to
            understand the work. So far, would say that: I’m confident in that
            what I don't know yet, I will be able to learn quickly with guidance
            and a bit of Google.
            <br />
            <br />
            What I've learned about myself, is that I truly enjoy the results of
            my work. Even when at times it seems like taking one step forward
            and two step back, when I solved the issue, I feel great
            satisfaction and motivation to keep going.
          </p>
        </div>
      </div>


    </div>
  );
}
