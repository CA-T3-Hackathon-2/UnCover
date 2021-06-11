import React from 'react';
import Header from './styled/Header'
import AboutImage from '../assets/about-us.png'
import HandPoint from '../assets/hand-point.png'
import HandThumbUp from '../assets/hand-thumb-up.png'
import HandCool from '../assets/hand-cool.png'
import HandRockstar from '../assets/hand-rockstar.png'

const handStyles = {
  width: "10%",
  height: "auto"
}

const aboutImageStyles = {
  width: "50%",
  height: "auto"
}

const boxStyles = {
  border: "solid black 2px",
  padding: "10px",
  borderRadius: "5px"
}

const About = () => {
  return(
    <section>
      <div>
        <div>
          <p>This is an event finder app designed and built during a 48-hour hackathon at Coder Academy, Melbourne and Sydney.</p>
          <p>Using the app is easy.</p>
          <ol>
            <li>Pick your city form the top-right corner</li>
            <li>Click 'Find Events' and it will take you to a form</li>
            <li>Select additional filters for Category, Date, Distance and Price </li>
            <li>Click 'Submit' and let UnCover take you on a journey!</li>
          </ol>
          <img style={aboutImageStyles} src={AboutImage} alt="person-sitting-with-laptop" />
        </div>
        <div>
          <Header>Meet the <span style={{ color: "#3b9bd1" }}>Team</span></Header>
          <p>We are a team of aspiring developers at Coder Academy</p>

          <div>
            <img style={handStyles} src={HandPoint} alt="hand-point" />
            <div style={boxStyles}>
              <h1>Ana</h1>
              <span>Hangs out with cats and sings and plays keys with Renelophus.</span>
            </div>
          </div>
          <div>
            <img style={handStyles} src={HandThumbUp} alt="hand-thumb-up" />
            <div style={boxStyles}>
              <h1>Irah</h1>
              <span>Loves her coffee and dabbles with graphic design and digital illustration.</span>
            </div>
          </div>
          <div>
            <img style={handStyles} src={HandCool} alt="hand-cool" />
            <div style={boxStyles}>
              <h1>Darko</h1>
              <span>Enjoys Roku gin and loves creating mischief.</span>
            </div>
          </div>
          <div>
            <img style={handStyles} src={HandRockstar} alt="hand-rockstar" />
            <div style={boxStyles}>
              <h1>Rhys</h1>
              <span>Restores mid-century furnitures and is a small animal veterinarian.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About;