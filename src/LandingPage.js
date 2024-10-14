// LandingPage.js
import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  // State to manage button text
  const [buttonText, setButtonText] = useState('Explore Our Services');

  // Scroll function for call-to-action
  const handleLearnMore = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  // Change button text and color on mouse enter and leave
  const handleMouseEnter = () => {
    setButtonText('Let’s Go!');
  };

  const handleMouseLeave = () => {
    setButtonText('Join Us');
  };

  return (
    <div id="landing">
      <h1>Innovative IT Solutions for Your Business</h1>
      <p>
        Unlock the Power of Technology through Expert Analysis, Development, and System Design. Let’s take your Business to the Next Level.
      </p>
      <div className="button-container">
        <button onClick={handleLearnMore}>About Us</button>
        <button onClick={handleLearnMore}>Services</button>
        <button onClick={handleLearnMore}>Portfolio</button>
        <button onClick={handleLearnMore}>Contact Us</button>
      </div>
      <button 
        onClick={handleLearnMore}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default LandingPage;
