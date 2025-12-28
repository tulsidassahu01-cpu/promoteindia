import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PromoteEmployment from './pages/Programs/PromoteEmployment';
import PromoteAwareness from './pages/Programs/PromoteAwareness';
import PromoteHumanity from './pages/Programs/PromoteHumanity';
import PromoteGovernance from './pages/Programs/PromoteGovernance';
import Contact from './pages/Contact';
import Volunteer from './pages/Volunteer';
import Donate from './pages/Donate';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/promote-employment" element={<PromoteEmployment />} />
        <Route path="/promote-awareness" element={<PromoteAwareness />} />
        <Route path="/promote-humanity" element={<PromoteHumanity />} />
        <Route path="/promote-governance" element={<PromoteGovernance />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

