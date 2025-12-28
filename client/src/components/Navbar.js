import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFlag, FaIndustry, FaBrain, FaHandsHelping, FaSeedling } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text"><FaFlag className="flag-icon" /> Promote India Foundation</span>
        </Link>
        
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <div className="dropdown">
            <span className="navbar-link dropdown-toggle">Programs</span>
            <div className="dropdown-content">
              <Link to="/promote-employment" onClick={() => setIsOpen(false)}>
                <FaIndustry /> Promote Employment
              </Link>
              <Link to="/promote-awareness" onClick={() => setIsOpen(false)}>
                <FaBrain /> Promote Awareness
              </Link>
              <Link to="/promote-humanity" onClick={() => setIsOpen(false)}>
                <FaHandsHelping /> Promote Humanity
              </Link>
              <Link to="/promote-governance" onClick={() => setIsOpen(false)}>
                <FaSeedling /> Promote Governance
              </Link>
            </div>
          </div>
          <Link 
            to="/contact" 
            className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>

        <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

