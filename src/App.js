import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="src/about" element={<About />} />
        <Route path="src/services" element={<Services />} />
        <Route path="src/portfolio" element={<Portfolio />} />
        <Route path="src/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
