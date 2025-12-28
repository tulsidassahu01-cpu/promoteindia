import React from 'react';
import { FaBrain, FaSchool, FaHospital, FaGlobeAmericas, FaBullhorn, FaMobileAlt, FaTv } from 'react-icons/fa';
import './ProgramPage.css';

const PromoteAwareness = () => {
  return (
    <div className="program-page">
      <section className="program-header awareness-header">
        <div className="program-header-content">
          <div className="program-icon-large"><FaBrain /></div>
          <h1>Promote Awareness</h1>
          <p className="program-hindi-title">जागरूक भारत अभियान</p>
          <p className="program-slogan">"जागरूकता ही विकास की पहली सीढ़ी है"</p>
        </div>
      </section>

      <section className="section">
        <div className="program-content">
          <h2 className="section-title">Objectives</h2>
          <p className="program-description">
            Spread awareness on education, health, environment, and citizen rights to create an informed 
            and empowered society. We believe that awareness is the first step towards development, and an 
            aware citizen is the foundation of a strong democracy.
          </p>
        </div>
      </section>

      <section className="key-activities-section">
        <div className="section">
          <h2 className="section-title">Key Activities</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon"><FaSchool /></div>
              <h3>Educational Awareness Camps</h3>
              <p>
                Conduct awareness camps in schools, colleges, and panchayats covering topics such as 
                importance of education, scholarship opportunities, digital literacy, and career guidance. 
                These camps empower students and parents with knowledge about educational rights and resources.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon"><FaHospital /></div>
              <h3>Health Awareness Programs</h3>
              <p>
                Organize health camps focusing on preventive healthcare, nutrition, hygiene, mental health, 
                and access to government health schemes. We work with healthcare professionals to provide 
                free health check-ups and awareness sessions.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon"><FaGlobeAmericas /></div>
              <h3>Environmental Awareness</h3>
              <p>
                Promote environmental consciousness through tree plantation drives, waste management 
                awareness, water conservation programs, and climate change education. We encourage 
                sustainable practices at individual and community levels.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon"><FaBullhorn /></div>
              <h3>"Nagrik Chetna Rally"</h3>
              <p>
                Organize citizen awareness rallies across districts to educate people about their rights, 
                government schemes, and how to access public services. These rallies create a platform 
                for direct interaction between citizens and officials.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon"><FaMobileAlt /></div>
              <h3>Social Media Campaigns</h3>
              <p>
                Leverage digital platforms to spread awareness through informative posts, videos, and 
                interactive content. Our campaigns reach millions of citizens with important information 
                about rights, schemes, and social issues.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon"><FaTv /></div>
              <h3>Government Scheme & Citizen Rights Video Series</h3>
              <p>
                Create and distribute educational video content explaining government schemes, citizen 
                rights, and how to access various services. These videos are available in multiple 
                languages and formats for easy understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="section">
          <h2 className="section-title">Expected Impact</h2>
          <div className="impact-grid">
            <div className="impact-item">
              <h3>100+</h3>
              <p>Awareness Camps Monthly</p>
            </div>
            <div className="impact-item">
              <h3>1M+</h3>
              <p>Citizens Reached</p>
            </div>
            <div className="impact-item">
              <h3>500+</h3>
              <p>Videos Created</p>
            </div>
            <div className="impact-item">
              <h3>50+</h3>
              <p>Districts Covered</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromoteAwareness;

