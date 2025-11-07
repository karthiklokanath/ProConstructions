import React from 'react';
import landingImg from '../assets/LandingPage.png';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${landingImg})`
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">BUILD YOUR AVADA</h1>
          <div className="hero-divider"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
