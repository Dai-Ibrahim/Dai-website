import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';

function Home() {
  return (
    <>
      <HeroSection />
      <div id="card-sections" className="card-sec">
      <Cards />

      </div>

    </>
  );
}

export default Home;
