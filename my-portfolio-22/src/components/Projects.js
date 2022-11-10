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
      {/* <div className="collection">
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
      </div> */}
      <div className='test-compo'>
        <div class='main-container'>
          <section class='announcements'>
            <span>
              Facial coverings are optional in our stores for our fully
              vaccinated customers, following CDC guidance, except where ocal
              regulations require it by law.{' '}
              <a href='starbucks.com/rewards.'>Learn more</a>
            </span>
          </section>
          <section class='rewards left-right-section'>
            <div class='text'>
              <h1><b>BEACTIV</b></h1>
              <h3>Find out where to do free sport in Barcelona!</h3>
    
              <a className="cta" href="https://beactiv.surge.sh/">View Website</a>
            </div>
            <div class='image'>
              <img
                src={PhotoThree}
                alt='beactiv website'
              />
            </div>
          </section>
          <section class='chill left-right-section'>
            <div class='image'>
              <img
                src={PhotoOne}
                alt=''
              />
            </div>
            <div class='text'>
              <h1>Register and Login</h1>
              <h3>
              A register and login website <br/>Created with: React, Express, MongoDB
              </h3>
              <a  className="cta"href="https://login-website-ta.herokuapp.com/">View Website</a>
            </div>
          </section>
          <section class='rewards left-right-section'>
            <div class='text'>
              <h1><b>CSS Template website</b></h1>
              <h3>You're welcome to use this website as a template for a future project of yours!</h3>
    
              <a className="cta" href="https://css-website-practice.netlify.app/">View Website</a>
            </div>
            <div class='image'>
              <img
                src={PhotoTwo}
                alt='beactiv website'
              />
            </div>
          </section>
          <section class='chill left-right-section'>
            <div class='image'>
              <img
                src={PhotoOne}
                alt=''
              />
            </div>
            <div class='text'>
              <h1>Register and Login</h1>
              <h3>
              A register and login website <br/>Created with: React, Express, MongoDB
              </h3>
              <a  className="cta"href="https://login-website-ta.herokuapp.com/">View Website</a>
            </div>
          </section>


          {/* <section class='heyy'>
            <div class='top-bottom-section'>
              <div class='section-container'>
                <div class='image'>
                  <img
                    src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70203.jpg'
                    alt=''
                  />
                </div>
                <div class='text'>
                  <h1>Order and pick up. Easy as that.</h1>
                  <h3>
                    Just open the app, order your favorites, and enjoy
                    contactless pay. From there, choose whichever pickup method
                    is best for you.
                  </h3>
                  <div class='cta-container'>
                    <div class='cta'>See pickup options</div>
                  </div>
                </div>
              </div>
            </div>
            <div class='top-bottom-section'>
              <div class='section-container'>
                <div class='image'>
                  <img
                    src='https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-72045.jpg'
                    alt=''
                  />
                </div>
                <div class='text'>
                  <h1>Floating into summer like…</h1>
                  <h3>
                    Keep the laid-back vibes going. Order Starbucks drinks on
                    Uber Eats.**
                  </h3>
                  <div class='cta-container'>
                    <div class='cta'>Order now</div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          <section class='change left-right-section'>
            <div class='text'>
              <h1>Creating positive change</h1>
              <h3>
                We believe coffee can help fuel connection and strengthen
                communities. See how our partners (employees) are uplifting
                neighborhoods everywhere.
              </h3>
              <div class='cta'>See how</div>
            </div>
            <div class='image'>
              <img
                src={PhotoFour}
                alt=''
              />
            </div>
          </section>
          <section class='center-section'>
            <div class='info-text'>
              <p>
                *At participating stores. Some restrictions apply. See
                <a href='starbucks.com/rewards'>Click</a>
              </p>
            </div>
            <div class='info-text'>
              <p>
                **Menu limited. Restricted delivery area. Available in
                participating locations only. Fees subject to change. Prices for
                Starbucks® items purchased through Uber Eats may be higher than
                posted in stores or as marked. See the Uber Eats app for
                details.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Projects
