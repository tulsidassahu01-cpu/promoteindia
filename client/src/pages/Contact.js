import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { submitContact, resetContact } from '../store/slices/contactSlice';
import { submitVolunteer, resetVolunteer } from '../store/slices/volunteerSlice';
import './Contact.css';

const Contact = () => {
  const dispatch = useDispatch();
  const { loading: contactLoading, success: contactSuccess, error: contactError } = useSelector(state => state.contact);
  const { loading: volunteerLoading, success: volunteerSuccess, error: volunteerError } = useSelector(state => state.volunteer);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    programInterest: '',
    message: ''
  });

  const [activeTab, setActiveTab] = useState('contact');

  const handleContactChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
    if (contactSuccess || contactError) {
      dispatch(resetContact());
    }
  };

  const handleVolunteerChange = (e) => {
    setVolunteerForm({
      ...volunteerForm,
      [e.target.name]: e.target.value
    });
    if (volunteerSuccess || volunteerError) {
      dispatch(resetVolunteer());
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    dispatch(submitContact(contactForm)).then(() => {
      if (!contactError) {
        setContactForm({ name: '', email: '', phone: '', message: '' });
      }
    });
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    dispatch(submitVolunteer(volunteerForm)).then(() => {
      if (!volunteerError) {
        setVolunteerForm({ name: '', email: '', phone: '', address: '', programInterest: '', message: '' });
      }
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-header">
        <div className="contact-header-content">
          <h1>Contact Us</h1>
          <p>Get in touch with Promote India Foundation</p>
        </div>
      </section>

      <section className="section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Office Information</h2>
            <div className="info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div>
                <h4>Address</h4>
                <p>Promote India Foundation<br />
                New Delhi, India<br />
                (Address details to be updated)</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaPhone /></div>
              <div>
                <h4>Phone</h4>
                <p>+91-XXXXXXXXXX<br />
                (Phone number to be updated)</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaEnvelope /></div>
              <div>
                <h4>Email</h4>
                <p>contact@promoteindiafoundation.org<br />
                info@promoteindiafoundation.org</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><FaGlobe /></div>
              <div>
                <h4>Social Media</h4>
                <div className="social-links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /> Facebook</a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /> Twitter</a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /> Instagram</a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /> YouTube</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-forms">
            <div className="form-tabs">
              <button 
                className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
                onClick={() => setActiveTab('contact')}
              >
                Contact Form
              </button>
              <button 
                className={`tab-button ${activeTab === 'volunteer' ? 'active' : ''}`}
                onClick={() => setActiveTab('volunteer')}
              >
                Volunteer Registration
              </button>
            </div>

            {activeTab === 'contact' && (
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <h3>Send us a Message</h3>
                {contactSuccess && (
                  <div className="alert alert-success">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {contactError && (
                  <div className="alert alert-error">
                    {contactError.error || 'Failed to send message. Please try again.'}
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleContactChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={contactForm.message}
                    onChange={handleContactChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" disabled={contactLoading}>
                  {contactLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}

            {activeTab === 'volunteer' && (
              <form className="contact-form" onSubmit={handleVolunteerSubmit}>
                <h3>Join as a Volunteer</h3>
                {volunteerSuccess && (
                  <div className="alert alert-success">
                    Thank you! Your volunteer registration has been submitted successfully.
                  </div>
                )}
                {volunteerError && (
                  <div className="alert alert-error">
                    {volunteerError.error || 'Failed to submit registration. Please try again.'}
                  </div>
                )}
                
                <div className="form-group">
                  <label htmlFor="v-name">Name *</label>
                  <input
                    type="text"
                    id="v-name"
                    name="name"
                    value={volunteerForm.name}
                    onChange={handleVolunteerChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="v-email">Email *</label>
                  <input
                    type="email"
                    id="v-email"
                    name="email"
                    value={volunteerForm.email}
                    onChange={handleVolunteerChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="v-phone">Phone *</label>
                  <input
                    type="tel"
                    id="v-phone"
                    name="phone"
                    value={volunteerForm.phone}
                    onChange={handleVolunteerChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="v-address">Address</label>
                  <textarea
                    id="v-address"
                    name="address"
                    rows="3"
                    value={volunteerForm.address}
                    onChange={handleVolunteerChange}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="v-program">Program Interest</label>
                  <select
                    id="v-program"
                    name="programInterest"
                    value={volunteerForm.programInterest}
                    onChange={handleVolunteerChange}
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
                  <label htmlFor="v-message">Message</label>
                  <textarea
                    id="v-message"
                    name="message"
                    rows="4"
                    value={volunteerForm.message}
                    onChange={handleVolunteerChange}
                    placeholder="Tell us why you want to volunteer..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-secondary" disabled={volunteerLoading}>
                  {volunteerLoading ? 'Submitting...' : 'Register as Volunteer'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

