import React from 'react';
import { FaIndustry, FaGraduationCap, FaRocket, FaBriefcase, FaClipboardList } from 'react-icons/fa';
import './ProgramPage.css';

const PromoteEmployment = () => {
  return (
    <div className="program-page">
      <section className="program-header employment-header">
        <div className="program-header-content">
          <div className="program-icon-large"><FaIndustry /></div>
          <h1>Promote Employment</h1>
          <p className="program-hindi-title">रोजगार प्रोत्साहन योजना</p>
          <p className="program-slogan">"हर हाथ को काम, हर गांव में सम्मान"</p>
        </div>
      </section>

      <section className="section">
        <div className="program-content">
          <h2 className="section-title">Objectives</h2>
          <p className="program-description">
            Connect unemployed youth with training, employment, and entrepreneurship opportunities to build 
            a skilled and self-reliant workforce across India. Our mission is to ensure that every hand has 
            work and every village has dignity through meaningful employment.
          </p>
        </div>
      </section>

      <section className="key-activities-section">
        <div className="section">
          <h2 className="section-title">Key Activities</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon"><FaGraduationCap /></div>
              <h3>Skill Development Centers</h3>
              <p>
                Establish skill development centers across districts to provide vocational training in 
                various sectors including IT, manufacturing, agriculture, and services. These centers 
                offer certification programs aligned with industry requirements.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon"><FaRocket /></div>
              <h3>"Promote Startup India" Assistance</h3>
              <p>
                Support aspiring entrepreneurs with mentorship, funding guidance, and business development 
                resources. We help connect startups with investors and provide access to government 
                startup schemes and incentives.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon"><FaBriefcase /></div>
              <h3>"Apna Rozgar Portal"</h3>
              <p>
                A comprehensive online portal connecting job seekers with local employment opportunities. 
                The portal features job listings, skill assessments, resume building tools, and direct 
                connections with employers in various sectors.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon"><FaClipboardList /></div>
              <h3>Job Fairs & Government Scheme Awareness Camps</h3>
              <p>
                Organize regular job fairs bringing together employers and job seekers. Conduct awareness 
                camps to inform citizens about government employment schemes, skill development programs, 
                and financial assistance available for self-employment.
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
              <h3>10,000+</h3>
              <p>Youth Trained Annually</p>
            </div>
            <div className="impact-item">
              <h3>5,000+</h3>
              <p>Job Placements</p>
            </div>
            <div className="impact-item">
              <h3>500+</h3>
              <p>Startups Supported</p>
            </div>
            <div className="impact-item">
              <h3>50+</h3>
              <p>Skill Centers Established</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromoteEmployment;

