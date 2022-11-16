import React from 'react'
// import Proj from "./proj";
import Photo from '../img/profile-picture.jpeg'
import Header from './Header'
import '../css/about.css'

export default function About () {
  return (
    <div className='main-container'>
      <Header />
      {/* <div className="intro">
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
      </div> */}

      <div className='about-section'>
        <h1>About Me</h1>
        <p>
          What I've learned about myself, is that I truly enjoy the results of
          my work. Even when at times it seems like taking one step forward and
          two step back, when I solved the issue, I feel great satisfaction and
          motivation to keep going.
        </p>
      </div>
      <div className='skills'>
        <div className='tech'>
          <ul>
            <li>Javscript</li>
            <li>React</li>
            <li>React Native</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>RESTful API</li>
            <li>Postman</li>
            <li>Git</li>
            <li>Github</li>
            <li>Bitbucket</li>
            <li>MongoDB</li>
            <li>Jenkins</li>
            <li>AWS</li>
            <li>Docker</li>
            <li>Jira</li>
            <li>Google Suite</li>
          </ul>
        </div>
        <div className='trait'>
          <ul>
            <li>
              Analytical - It comes easy for me to see connections and I find it
              easy to stay calm in fast-moving, stressful environments.
            </li>
            <li>
              Driven - I find motivation in exceeding the expectations others
              have on me and I constantly search for methods and habits that
              improve my professional and interpersonal skills.
            </li>
            <li>
              Collaborative - I consider myself to be good at considering the
              opinion of others before making decision and I strongly believe in
              the advantages of teamwork.
            </li>
            <li>
              Accuracy - It is important to me that my work is at its highest
              level.
            </li>
            <li>
              Organised - Good at planning and structure, handling different
              tasks of different aspects in stressful environments.
            </li>
            <li>
              Educational - Easy going in many areas and I do see the importance
              of clearness and can easily adapt my way of working style.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
