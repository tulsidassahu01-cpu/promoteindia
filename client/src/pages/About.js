import React from 'react';
import { FaEye, FaBriefcase, FaLightbulb, FaBullhorn, FaLandmark } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Header */}
      <section className="about-header">
        <div className="about-header-content">
          <h1>About Promote India Foundation</h1>
          <p className="about-tagline">
            "एक संकल्प भारत को प्रोत्साहित करने का — जहाँ विकास केवल आर्थिक नहीं, बल्कि मानवीय भी हो।"
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section">
        <div className="about-section">
          <div className="about-content">
            <h2 className="section-title">Who We Are</h2>
            <div className="about-text">
              <p>
                <strong>Promote India Foundation</strong> is a national foundation dedicated to promoting 
                employment, awareness, humanity, and transparent governance across India. We believe that 
                true development encompasses not just economic growth, but also human values, social harmony, 
                and citizen empowerment.
              </p>
              <p>
                Our foundation works at the grassroots level, connecting with communities, youth, and citizens 
                to create meaningful change. Through our four flagship programs, we aim to build a stronger, 
                more aware, and united India where every citizen has the opportunity to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="vision-section">
        <div className="section">
          <div className="vision-content">
            <div className="vision-icon"><FaEye /></div>
            <h2 className="section-title">Our Vision</h2>
            <p className="vision-text">
              "भारत को आत्मनिर्भर, जागरूक और मानवीय राष्ट्र बनाना।"
            </p>
            <p className="vision-english">
              To make India a self-reliant, aware, and humane nation where development is not just economic, 
              but also human-centered. We envision an India where every citizen is empowered, every community 
              is aware, and every individual is treated with dignity and respect.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="mission-details">
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-card-icon"><FaBriefcase /></div>
              <h3>Empower Youth</h3>
              <p>
                Connect unemployed youth with training, employment opportunities, and entrepreneurship support 
                to build a skilled and self-reliant workforce.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-card-icon"><FaLightbulb /></div>
              <h3>Build Human Values</h3>
              <p>
                Promote love, unity, tolerance, and human values across communities to create a harmonious 
                and inclusive society.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-card-icon"><FaBullhorn /></div>
              <h3>Spread Awareness</h3>
              <p>
                Educate citizens about their rights, government schemes, health, education, and environmental 
                issues to create an informed society.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-card-icon"><FaLandmark /></div>
              <h3>Promote Transparent Governance</h3>
              <p>
                Encourage transparency and ground-level monitoring of government schemes to ensure that 
                public resources reach those who need them most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="section">
          <h2 className="section-title" style={{ color: 'var(--white)' }}>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h4>Integrity</h4>
              <p>Transparency and honesty in all our actions</p>
            </div>
            <div className="value-item">
              <h4>Inclusivity</h4>
              <p>Reaching every corner of India, leaving no one behind</p>
            </div>
            <div className="value-item">
              <h4>Innovation</h4>
              <p>Creative solutions for complex social challenges</p>
            </div>
            <div className="value-item">
              <h4>Impact</h4>
              <p>Measurable change in communities we serve</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

