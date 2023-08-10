import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contactUs';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}