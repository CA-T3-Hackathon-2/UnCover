import React from 'react';
import { Link } from 'react-router-dom'
import Header from './styled/Header'
import AboutImage from '../assets/about-us.png'
import HandPoint from '../assets/hand-point.png'
import HandThumbUp from '../assets/hand-thumb-up.png'
import HandCool from '../assets/hand-cool.png'
import HandRockstar from '../assets/hand-rockstar.png'

//styled components
import {AboutMainBox, AboutColumn, AboutImagePosition, TeamHandAndBox, BoxStyles, HandStyles} from './styled/AboutStyles'

const About = () => {
  return(
    <section>
      <AboutMainBox>
        <AboutColumn>
          <Header style={{ marginBottom: "3rem" }}  >About <span style={{ color: "#3b9bd1" }}>UnCover</span></Header>
          <p>This is an event finder app designed and built during a 48-hour hackathon at Coder Academy, Melbourne and Sydney.</p>
          <p>Using the app is easy.</p>
          <ol>
            <li>Pick your city from the top-right corner</li>
            <li>Click 'Find Events' to go to the form</li>
            <li>Select additional filters for Category, Date, Distance and Price </li>
            <li>Click 'Submit' and <span style={{fontWeight: "bold"}}>let <span style={{ color: "#3b9bd1" }}>UnCover</span> take you on a journey!</span></li>
          </ol>
          <AboutImagePosition src={AboutImage} alt="person-sitting-with-laptop" />
        </AboutColumn>
        <AboutColumn>
          <Header style={{ marginBottom: "3rem" }}>Meet the <span style={{ color: "#3b9bd1" }}>Team</span></Header>
          <p style={{ textAlign: "center" }}>We are a team of aspiring developers at Coder Academy</p>

          <TeamHandAndBox>
            <HandStyles src={HandPoint} alt="hand-point" />
            <BoxStyles>
            <Link to={{pathname: "https://github.com/chivoi"}} target="_blank">
              <h1 style={{color: "#3b9bd1"}}>Ana</h1>
            </Link>
              <span>Hangs out with cats, and sings and plays keys with Renelophus.</span>
            </BoxStyles>
          </TeamHandAndBox>
          <TeamHandAndBox>
            <HandStyles src={HandThumbUp} alt="hand-thumb-up" />
            <BoxStyles>
            <Link to={{pathname: "https://github.com/irahrosete"}} target="_blank">
              <h1 style={{color: "#3b9bd1"}}>Irah</h1>
            </Link>
              <span>Loves coffee, and dabbles with graphic design and digital illustration.</span>
            </BoxStyles>
          </TeamHandAndBox>
          <TeamHandAndBox>
            <HandStyles src={HandCool} alt="hand-cool" />
            <BoxStyles>
            <Link to={{pathname: "https://github.com/DarkoAU"}} target="_blank">
              <h1 style={{color: "#3b9bd1"}}>Darko</h1>
            </Link>
              <span>Enjoys Roku gin, and loves creating mischief.</span>
            </BoxStyles>
          </TeamHandAndBox>
          <TeamHandAndBox>
            <HandStyles src={HandRockstar} alt="hand-rockstar" />
            <BoxStyles>
            <Link to={{pathname: "https://github.com/Rhys-Morris"}} target="_blank">
              <h1 style={{color: "#3b9bd1"}}>Rhys</h1>
            </Link>
              <span>Restores mid-century furnitures, and is a small animal veterinarian.</span>
            </BoxStyles>
          </TeamHandAndBox>

        </AboutColumn>
      </AboutMainBox>
    </section>
  )
}

export default About;