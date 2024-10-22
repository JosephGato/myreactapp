import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div id="landing">
      <h1>Innovative IT Solutions for Your Business</h1>
      <p>Unlock the Power of Technology through Expert Analysis, Development, and System Design. Let’s take your Business to the Next Level.</p>
      
      <div className="button-container">
        <Link to="src/about">
          <button>About Us</button>
        </Link>
        <Link to="src/services">
          <button>Services</button>
        </Link>
        <Link to="src/portfolio">
          <button>Portfolio</button>
        </Link>
        <Link to="src/contact">
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
