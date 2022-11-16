import React from 'react'
import '../css/proj.css'
import PhotoOne from '../img/login.webp'
import PhotoTwo from '../img/csswebsite.webp'
import PhotoThree from '../img/beactiv.webp'
import PhotoFour from '../img/qtscreen.webp'
import Header from './Header'
function Projects () {
  return (
    <div className='projects' id='projects'>
      <Header />
      <h1>Projects</h1>
      <div className='test-compo'>
        <div className='main-container'>
          <section className='announcements'>
            <span>
 Creating a project usually start with me reflecting on what I find useful. If it's a website to find where to do sports outside, as BeActiv that was created during the pandemic. Or a useful fullstack application that need authorization in order to get access.
              {/* <a href='starbucks.com/rewards.'>Learn more</a> */}
            </span>
          </section>
          <section className='rewards left-right-section'>
            <div className='text'>
              <h1><b>BEACTIV</b></h1>
              <h3>Find out where to do free sport in Barcelona!</h3>
    
              <a className="cta" href="https://beactiv.surge.sh/">View Website</a>
            </div>
            <div className='image'>
              <img
                src={PhotoThree}
                alt='beactiv website'
              />
            </div>
          </section>
          <section className='chill left-right-section'>
            <div className='image'>
              <img
                src={PhotoOne}
                alt=''
              />
            </div>
            <div className='text'>
              <h1>Register and Login</h1>
              <h3>
              A register and login website <br/>Created using MERN stack 
              <br/>( Mongodb, Express, React, Node.js )
              </h3>
              <a  className="cta"href="https://login-website-ta.herokuapp.com/">View Website</a>
            </div>
          </section>
          <section className='rewards left-right-section'>
            <div className='text'>
              <h1><b>CSS Template website</b></h1>
              <h3>You're welcome to use this website as a template for a future project of yours!</h3>
    
              <a className="cta" href="https://css-website-practice.netlify.app/">View Website</a>
            </div>
            <div className='image'>
              <img
                src={PhotoTwo}
                alt='beactiv website'
              />
            </div>
          </section>
          <section className='chill left-right-section'>
            <div className='image'>
              <img
                src={PhotoOne}
                alt=''
              />
            </div>
            <div className='text'>
              <h1>Register and Login</h1>
              <h3>
              A register and login website <br/>Created with: React, Express, MongoDB
              </h3>
              <a  className="cta"href="https://login-website-ta.herokuapp.com/">View Website</a>
            </div>
          </section>

          {/* <section className='change left-right-section'>
            <div className='text'>
              <h1>Creating positive change</h1>
              <h3>
                We believe coffee can help fuel connection and strengthen
                communities. See how our partners (employees) are uplifting
                neighborhoods everywhere.
              </h3>
              <div className='cta'>See how</div>
            </div>
            <div className='image'>
              <img
                src={PhotoFour}
                alt=''
              />
            </div>
          </section> */}
          {/* <section className='center-section'>
            <div className='info-text'>
              <p>
                *At participating stores. Some restrictions apply. See
                <a href='starbucks.com/rewards'>Click</a>
              </p>
            </div>
            <div className='info-text'>
              <p>
                **Menu limited. Restricted delivery area. Available in
                participating locations only. Fees subject to change. Prices for
                Starbucks® items purchased through Uber Eats may be higher than
                posted in stores or as marked. See the Uber Eats app for
                details.
              </p>
            </div>
          </section> */}
        </div>
      </div>
    </div>
  )
}

export default Projects
