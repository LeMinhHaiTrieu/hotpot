import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contactUs';
import Membership from './pages/membership';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}