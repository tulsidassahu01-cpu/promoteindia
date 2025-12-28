import React from 'react';
import { Link } from 'react-router-dom';
import { FaIndustry, FaBrain, FaHandsHelping, FaSeedling } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Promote India Foundation</h1>
          <p className="hero-subtitle">
            "एक संकल्प भारत को प्रोत्साहित करने का — जहाँ विकास केवल आर्थिक नहीं, बल्कि मानवीय भी हो।"
          </p>
          <p className="hero-description">
            A national foundation dedicated to promoting employment, awareness, humanity, and transparent governance across India.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">
              Know More
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Join the Mission
            </Link>
          </div>
        </div>
        <div className="hero-waves">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,80 350,80 600,40 C850,0 1050,80 1200,40 L1200,120 L0,120 Z" fill="var(--white)"></path>
          </svg>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="section programs-overview">
        <h2 className="section-title">Our Flagship Programs</h2>
        <p className="section-subtitle">
          Four comprehensive initiatives working together to build a stronger, more aware, and united India
        </p>
        
        <div className="programs-grid">
          <div className="program-card">
            <div className="program-icon"><FaIndustry /></div>
            <h3>Promote Employment</h3>
            <p className="program-hindi">रोजगार प्रोत्साहन योजना</p>
            <p className="program-slogan">"हर हाथ को काम, हर गांव में सम्मान"</p>
            <p className="program-description">
              Connect unemployed youth with training, employment, and entrepreneurship opportunities.
            </p>
            <Link to="/promote-employment" className="btn btn-outline">
              Learn More →
            </Link>
          </div>

          <div className="program-card">
            <div className="program-icon"><FaBrain /></div>
            <h3>Promote Awareness</h3>
            <p className="program-hindi">जागरूक भारत अभियान</p>
            <p className="program-slogan">"जागरूकता ही विकास की पहली सीढ़ी है"</p>
            <p className="program-description">
              Spread awareness on education, health, environment, and citizen rights across India.
            </p>
            <Link to="/promote-awareness" className="btn btn-outline">
              Learn More →
            </Link>
          </div>

          <div className="program-card">
            <div className="program-icon"><FaHandsHelping /></div>
            <h3>Promote Humanity</h3>
            <p className="program-hindi">मानवता प्रोत्साहन योजना</p>
            <p className="program-slogan">"जाति से नहीं, कर्म से मनुष्य बनो"</p>
            <p className="program-description">
              Promote love, unity, tolerance, and human values to build a harmonious society.
            </p>
            <Link to="/promote-humanity" className="btn btn-outline">
              Learn More →
            </Link>
          </div>

          <div className="program-card">
            <div className="program-icon"><FaSeedling /></div>
            <h3>Promote Governance</h3>
            <p className="program-hindi">जन-निगरानी और पारदर्शिता योजना</p>
            <p className="program-slogan">"जन का धन, जन के हित में"</p>
            <p className="program-description">
              Encourage transparency and ground-level monitoring of government schemes.
            </p>
            <Link to="/promote-governance" className="btn btn-outline">
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p className="mission-text">
            "भारत को आत्मनिर्भर, जागरूक और मानवीय राष्ट्र बनाना।"
          </p>
          <p className="mission-english">
            To make India a self-reliant, aware, and humane nation through employment, awareness, humanity, and transparent governance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;

