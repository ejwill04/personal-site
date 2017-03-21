import React from 'react';
import './about.css';
import AboutMeSection from './aboutMeSection'

const About = () => {
  return (
    <div className="about" id='about'>
      <h2 className='section-title'>about</h2>
      <AboutMeSection />
    </div>
  );
}

export default About;
