import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

import startvid from './videos/video-3.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={startvid} autoPlay loop muted />
      <h1>Dai Ibrahim</h1>
      <p>Software Engineering Student at Embry-Riddle Aeronautical University</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          RÉSUMÉ
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;
