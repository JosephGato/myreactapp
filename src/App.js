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
          More Information About Us
        </h2>
        <p style={{ padding: '0 30px', textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          placerat ut felis eget varius. Aliquam erat volutpat. Proin sit amet
          enim nec quam aliquet volutpat in a ligula. Nam consequat, massa sed
          viverra tincidunt, sapien dolor viverra erat, at gravida urna velit
          vel orci.
        </p>
      </div>
    </div>
  );
}

export default App;
