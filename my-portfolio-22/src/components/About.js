import React from 'react'
import Header from './Header'
import '../css/about.css'
import Traits from "../data/traits.json"
import Skills from "../data/skills.json"
export default function About () {
  return (
    <div className='main-container'>
      <Header />


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
        <div className='trait'>
          <ul>
            <li>Analytical</li>
            <li>
              It comes easy for me to see connections and I find it easy to stay
              calm in fast-moving, stressful environments.
            </li>

            <li>Driven</li>
            <li>
              I find motivation in exceeding the expectations others have on me
              and I constantly search for methods and habits that improve my
              professional and interpersonal skills.
            </li>

            <li>Collaborative</li>
            <li>
              I consider myself to be good at considering the opinion of others
              before making decision and I strongly believe in the advantages of
              teamwork.
            </li>

            <li>Accuracy</li>
            <li>
              It is important to me that my work is at its highest level.
            </li>

            <li>Organised</li>
            <li>
              Good at planning and structure, handling different tasks of
              different aspects in stressful environments.
            </li>

            <li>Educational</li>
            <li>
              Easy going in many areas and I do see the importance of clearness
              and can easily adapt my way of working style.
            </li>
          </ul>
        </div>
        <div className='tech'>
          <ul>
            <li>Javacript</li>
            <li>React</li>
            <li>CSS</li>
            <li>React Native</li>
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
      </div>
    </div>
  )
}
