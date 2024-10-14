// App.js
import React from 'react';
import LandingPage from './LandingPage';

function App() {
  return (
    <div>
      <LandingPage />
      {/* More sections of your page can go here */}
      <div style={{ height: '100vh', backgroundColor: '#f4f4f4' }}>
        <h2 style={{ padding: '50px', textAlign: 'center' }}>
          About Joseph
        </h2>
        <p style={{ padding: '0 30px', textAlign: 'center' }}>
          I am a competent Information Technologist graduating with a Bachelor's of Science 
          in Information Technology (Second Class, Upper Division) from Jomo Kenyatta 
          University of Agriculture and Technology. I have excellent skills in Graphic 
          Design, Software Programming, and development, with proficiency in a Client/Server 
          Computer Environment. I aspire to apply my proven technical systems skills to 
          projects that will enhance my expertise and contribute to the advancement of 
          computer systems technology.
        </p>
      </div>
    </div>
  );
}

export default App;
