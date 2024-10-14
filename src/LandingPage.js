// LandingPage.js
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  // Scroll function for call-to-action
  const handleLearnMore = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div id="landing">
      <h1>Welcome to Our Website</h1>
      <p>Your journey to success starts here.</p>
      <button onClick={handleLearnMore}>Learn More</button>
    </div>
  );
};

export default LandingPage;
