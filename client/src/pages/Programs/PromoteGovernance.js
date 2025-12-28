import React from 'react';
import { FaSeedling, FaChartBar, FaChartLine, FaComments, FaGlobe, FaBook, FaSearch } from 'react-icons/fa';
import './ProgramPage.css';

const PromoteGovernance = () => {
  return (
    <div className="program-page">
      <section className="program-header governance-header">
        <div className="program-header-content">
          <div className="program-icon-large"><FaSeedling /></div>
          <h1>Promote Governance</h1>
          <p className="program-hindi-title">जन-निगरानी और पारदर्शिता योजना</p>
          <p className="program-slogan">"जन का धन, जन के हित में"</p>
        </div>
      </section>

      <section className="section">
        <div className="program-content">
          <h2 className="section-title">Objectives</h2>
          <p className="program-description">
            Encourage transparency and ground-level monitoring of government schemes to ensure that public 
            resources reach those who need them most. We believe that public money should serve public 
            interest, and transparency is the key to accountable governance. Our mission is to empower 
            citizens to monitor and ensure effective implementation of government programs.
          </p>
        </div>
      </section>

      <section className="key-activities-section">
        <div className="section">
          <h2 className="section-title">Key Activities</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon"><FaChartBar /></div>
              <h3>District Social Audit Network</h3>
              <p>
                Establish a network of trained volunteers and citizens who conduct social audits of 
                government schemes at the district level. These audits ensure that schemes are implemented 
                as intended and benefits reach the intended beneficiaries.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon"><FaChartLine /></div>
              <h3>Monthly District-Wise Report Cards</h3>
              <p>
                Publish monthly report cards on our website showing the status of various government 
                schemes in each district. These report cards include implementation rates, beneficiary 
                coverage, and areas needing attention, making governance transparent and accountable.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon"><FaComments /></div>
              <h3>Citizen Feedback System</h3>
              <p>
                Provide a platform for citizens to report issues, provide feedback, and share their 
                experiences with government schemes. This feedback helps identify gaps and improve 
                implementation at the ground level.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon"><FaGlobe /></div>
              <h3>Access to Government Portals</h3>
              <p>
                Help citizens navigate and access various government portals and services. We provide 
                training and support to ensure that citizens can easily access information about schemes, 
                apply for benefits, and track their applications.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon"><FaBook /></div>
              <h3>Transparency Training Programs</h3>
              <p>
                Conduct training programs for citizens, volunteers, and local leaders on how to monitor 
                government schemes, file RTI applications, and ensure accountability. These programs 
                empower citizens to actively participate in governance.
              </p>
            </div>

            <div className="activity-card">
              <div className="activity-icon"><FaSearch /></div>
              <h3>Scheme Monitoring & Evaluation</h3>
              <p>
                Regularly monitor and evaluate the implementation of key government schemes, identifying 
                bottlenecks, corruption, and inefficiencies. Our reports help improve scheme effectiveness 
                and ensure better outcomes.
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
              <h3>500+</h3>
              <p>Social Audits Conducted</p>
            </div>
            <div className="impact-item">
              <h3>100+</h3>
              <p>Report Cards Published</p>
            </div>
            <div className="impact-item">
              <h3>10,000+</h3>
              <p>Citizens Trained</p>
            </div>
            <div className="impact-item">
              <h3>50+</h3>
              <p>Districts Monitored</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PromoteGovernance;

