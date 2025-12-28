import React from 'react';
import { Link } from 'react-router-dom';
import { FaFlag, FaIndustry, FaBrain, FaHandsHelping, FaSeedling, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3><FaFlag className="flag-icon" /> Promote India Foundation</h3>
            <p className="footer-mission">
              "एक संकल्प भारत को प्रोत्साहित करने का — जहाँ विकास केवल आर्थिक नहीं, बल्कि मानवीय भी हो।"
            </p>
            <p className="footer-tagline">
              A national foundation dedicated to promoting employment, awareness, humanity, and transparent governance across India.
            </p>
          </div>

          <div className="footer-section">
            <h4>Our Programs</h4>
            <ul className="footer-links">
              <li>
                <Link to="/promote-employment"><FaIndustry /> Promote Employment</Link>
              </li>
              <li>
                <Link to="/promote-awareness"><FaBrain /> Promote Awareness</Link>
              </li>
              <li>
                <Link to="/promote-humanity"><FaHandsHelping /> Promote Humanity</Link>
              </li>
              <li>
                <Link to="/promote-governance"><FaSeedling /> Promote Governance</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Join Us</h4>
            <p>Be a part of the change. Join our mission to build a better India.</p>
            <div className="footer-buttons">
              <Link to="/volunteer" className="btn btn-primary">
                Volunteer
              </Link>
              <Link to="/donate" className="btn btn-secondary">
                Donate
              </Link>
            </div>
            <div className="footer-social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Promote India Foundation. All rights reserved.</p>
          <p>Empowering India, One Step at a Time</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

