import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaHandsHelping, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBriefcase, FaComments } from 'react-icons/fa';
import { submitVolunteer, resetVolunteer } from '../store/slices/volunteerSlice';
import './Volunteer.css';

const Volunteer = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(state => state.volunteer);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    programInterest: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (success || error) {
      dispatch(resetVolunteer());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitVolunteer(formData)).then(() => {
      if (!error) {
        setFormData({ name: '', email: '', phone: '', address: '', programInterest: '', message: '' });
      }
    });
  };

  return (
    <div className="volunteer-page">
      <section className="volunteer-header">
        <div className="volunteer-header-content">
          <div className="volunteer-icon-large"><FaHandsHelping /></div>
          <h1>Join as a Volunteer</h1>
          <p className="volunteer-subtitle">
            Be a part of the change. Join our mission to build a better India.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="volunteer-container">
          <div className="volunteer-info">
            <h2>Why Volunteer?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <FaUser className="benefit-icon" />
                <h3>Make a Difference</h3>
                <p>Contribute to meaningful causes that impact millions of lives across India.</p>
              </div>
              <div className="benefit-card">
                <FaBriefcase className="benefit-icon" />
                <h3>Gain Experience</h3>
                <p>Develop skills, build networks, and enhance your professional profile.</p>
              </div>
              <div className="benefit-card">
                <FaHandsHelping className="benefit-icon" />
                <h3>Be Part of a Community</h3>
                <p>Join a network of passionate individuals working towards a common goal.</p>
              </div>
              <div className="benefit-card">
                <FaComments className="benefit-icon" />
                <h3>Voice Your Ideas</h3>
                <p>Share your ideas and help shape the future of our programs.</p>
              </div>
            </div>

            <div className="volunteer-programs">
              <h3>Choose Your Program</h3>
              <ul>
                <li><strong>Promote Employment:</strong> Help connect youth with opportunities</li>
                <li><strong>Promote Awareness:</strong> Spread knowledge and awareness</li>
                <li><strong>Promote Humanity:</strong> Build unity and human values</li>
                <li><strong>Promote Governance:</strong> Ensure transparency and accountability</li>
              </ul>
            </div>
          </div>

          <div className="volunteer-form-container">
            <form className="volunteer-form" onSubmit={handleSubmit}>
              <h2>Volunteer Registration</h2>
              
              {success && (
                <div className="alert alert-success">
                  Thank you! Your volunteer registration has been submitted successfully. We will contact you soon.
                </div>
              )}
              {error && (
                <div className="alert alert-error">
                  {error.error || 'Failed to submit registration. Please try again.'}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">
                  <FaUser className="form-icon" /> Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope className="form-icon" /> Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  <FaPhone className="form-icon" /> Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">
                  <FaMapMarkerAlt className="form-icon" /> Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="programInterest">
                  <FaBriefcase className="form-icon" /> Program Interest
                </label>
                <select
                  id="programInterest"
                  name="programInterest"
                  value={formData.programInterest}
                  onChange={handleChange}
                >
                  <option value="">Select a program</option>
                  <option value="employment">Promote Employment</option>
                  <option value="awareness">Promote Awareness</option>
                  <option value="humanity">Promote Humanity</option>
                  <option value="governance">Promote Governance</option>
                  <option value="all">All Programs</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <FaComments className="form-icon" /> Why do you want to volunteer?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about yourself and why you want to volunteer..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Submitting...' : 'Register as Volunteer'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;

