import React from "react";
import {BrowserRouter as Router, Route, Routes, Outlet} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contactUs';
import Membership from './pages/membership';
import Cuisine from './pages/cuisine'

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/cuisine" element={<Outlet />}>
            <Route path=':cuisineId' element={<Cuisine />} />
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}