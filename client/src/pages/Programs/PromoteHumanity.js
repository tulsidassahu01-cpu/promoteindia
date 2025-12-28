import React from 'react';
import { FaHandsHelping, FaWalking, FaComments, FaHandshake, FaHeart, FaGlobe, FaTheaterMasks } from 'react-icons/fa';
import './ProgramPage.css';

const PromoteHumanity = () => {
  return (
    <div className="program-page">
      <section className="program-header humanity-header">
        <div className="program-header-content">
          <div className="program-icon-large"><FaHandsHelping /></div>
          <h1>Promote Humanity</h1>
          <p className="program-hindi-title">मानवता प्रोत्साहन योजना</p>
          <p className="program-slogan">"जाति से नहीं, कर्म से मनुष्य बनो"</p>
        </div>
      </section>

      <section className="section">
        <div className="program-content">
          <h2 className="section-title">Objectives</h2>
          <p className="program-description">
            Promote love, unity, tolerance, and human values to build a harmonious and inclusive society. 
            We believe that true humanity lies not in one's caste, religion, or background, but in one's 
            actions and values. Our mission is to create a society where every individual is treated with 
            dignity and respect.
          </p>
        </div>
      </section>

      <section className="key-activities-section">
        <div className="section">
          <h2 className="section-title">Key Activities</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon"><FaWalking /></div>
              <h3>"Walk of Love" National Movement</h3>
              <p>
                A nationwide movement bringing together people from all walks of life to walk together in 
                unity and harmony. These walks promote the message of love, tolerance, and human values, 
                breaking down barriers of caste, religion, and social status.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon"><FaComments /></div>
              <h3>"Prem aur Samaj" Dialogue Centers</h3>
              <p>
                Establish dialogue centers where people from different communities can come together to 
                discuss, understand, and appreciate each other's perspectives. These centers facilitate 
                inter-community harmony and social unity through open conversations.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon"><FaHandshake /></div>
              <h3>Inter-Caste Harmony Programs</h3>
              <p>
                Organize programs that bring together people from different castes and communities to 
                work on common projects, celebrate festivals together, and build lasting relationships. 
                These programs break down social barriers and promote unity.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon"><FaHeart /></div>
              <h3>Human Values Education</h3>
              <p>
                Conduct workshops and sessions in schools, colleges, and communities to teach the 
                importance of compassion, empathy, respect, and tolerance. We believe that instilling 
                human values from a young age creates a better society.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon"><FaGlobe /></div>
              <h3>Social Unity Initiatives</h3>
              <p>
                Launch initiatives that promote social unity through community service, joint celebrations, 
                and collaborative projects. These initiatives demonstrate that when we work together, 
                we can achieve great things regardless of our backgrounds.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon"><FaTheaterMasks /></div>
              <h3>Cultural Exchange Programs</h3>
              <p>
                Organize cultural exchange programs where different communities share their traditions, 
                food, music, and art. These programs celebrate diversity while promoting unity and mutual 
                respect among different groups.
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
              <p>Walk of Love Events</p>
            </div>
            <div className="impact-item">
              <h3>50+</h3>
              <p>Dialogue Centers</p>
            </div>
            <div className="impact-item">
              <h3>10,000+</h3>
              <p>Participants</p>
            </div>
            <div className="impact-item">
              <h3>200+</h3>
              <p>Communities Engaged</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromoteHumanity;

