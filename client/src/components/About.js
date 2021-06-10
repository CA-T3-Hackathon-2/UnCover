import React from 'react';
import Header from './styled/Header'

const About = () => {
  return(
    <section style={{ margin: "5rem 0"} }>
      <Header>About <span style={{ color: "#3b9bd1" }}>UnCover</span></Header>
      <div style={{ marginTop: "2rem", padding:"0 10rem" } }>
        <p>Some very witty text about how UnCover UnCovers.</p>
        <p>It was built during a 48-hour hackathon by a team students of Coder Academy, Melbourne and Sydney.</p>
        <p>To use it, pick your location in the top right corner, click "Find Events" and let UnCover take you on a journey!</p>
      </div>
    </section>
  )
}

export default About;
