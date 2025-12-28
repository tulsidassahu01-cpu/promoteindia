import React, { useState, useEffect } from 'react';
import { FaDonate, FaRupeeSign, FaCreditCard, FaLock } from 'react-icons/fa';
import axios from 'axios';
import API_BASE_URL from '../config';
import './Donate.css';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleAmountSelect = (value) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmount = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setAmount('');
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!donorName || !donorEmail || !donorPhone) {
      setError('Please fill in all required fields');
      return;
    }

    const finalAmount = customAmount || amount;
    if (!finalAmount || parseFloat(finalAmount) < 1) {
      setError('Please enter a valid donation amount');
      return;
    }

    setLoading(true);

    try {
      // Create order on backend
      const response = await axios.post(`${API_BASE_URL}/api/create-order`, {
        amount: parseFloat(finalAmount) * 100, // Convert to paise
        currency: 'INR',
        donorName,
        donorEmail,
        donorPhone,
        message
      });

      const { orderId, amount: orderAmount, key } = response.data;

      // Initialize Razorpay
      const options = {
        key: key || process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: orderAmount,
        currency: 'INR',
        name: 'Promote India Foundation',
        description: 'Donation to Promote India Foundation',
        order_id: orderId,
        handler: async (response) => {
          try {
            // Verify payment on backend
            const verifyResponse = await axios.post('/api/verify-payment', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              donorName,
              donorEmail,
              donorPhone,
              amount: finalAmount,
              message
            });

            if (verifyResponse.data.success) {
              setSuccess(true);
              setDonorName('');
              setDonorEmail('');
              setDonorPhone('');
              setMessage('');
              setAmount('');
              setCustomAmount('');
            } else {
              setError('Payment verification failed. Please contact support.');
            }
          } catch (err) {
            setError('Payment verification failed. Please contact support.');
          } finally {
            setLoading(false);
          }
        },
        prefill: {
          name: donorName,
          email: donorEmail,
          contact: donorPhone
        },
        theme: {
          color: '#FF9933'
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to initiate payment. Please try again.');
      setLoading(false);
    }
  };

  const presetAmounts = [500, 1000, 2500, 5000, 10000];

  return (
    <div className="donate-page">
      <section className="donate-header">
        <div className="donate-header-content">
          <div className="donate-icon-large"><FaDonate /></div>
          <h1>Support Our Mission</h1>
          <p className="donate-subtitle">
            Your contribution helps us build a better India. Every rupee counts!
          </p>
        </div>
      </section>

      <section className="section">
        <div className="donate-container">
          <div className="donate-info">
            <h2>How Your Donation Helps</h2>
            <div className="impact-list">
              <div className="impact-item">
                <FaRupeeSign className="impact-icon" />
                <div>
                  <h3>Skill Development</h3>
                  <p>Train unemployed youth with market-relevant skills</p>
                </div>
              </div>
              <div className="impact-item">
                <FaRupeeSign className="impact-icon" />
                <div>
                  <h3>Awareness Programs</h3>
                  <p>Spread knowledge about rights, health, and education</p>
                </div>
              </div>
              <div className="impact-item">
                <FaRupeeSign className="impact-icon" />
                <div>
                  <h3>Community Building</h3>
                  <p>Promote unity, tolerance, and human values</p>
                </div>
              </div>
              <div className="impact-item">
                <FaRupeeSign className="impact-icon" />
                <div>
                  <h3>Transparent Governance</h3>
                  <p>Ensure accountability and monitor government schemes</p>
                </div>
              </div>
            </div>

            <div className="donation-note">
              <FaLock className="lock-icon" />
              <p>
                <strong>Secure Payment:</strong> All donations are processed securely through Razorpay. 
                We accept all major credit/debit cards, UPI, net banking, and wallets.
              </p>
            </div>
          </div>

          <div className="donate-form-container">
            <form className="donate-form" onSubmit={handlePayment}>
              <h2>Make a Donation</h2>
              
              {success && (
                <div className="alert alert-success">
                  Thank you for your generous donation! Your contribution will help us make a difference.
                </div>
              )}
              {error && (
                <div className="alert alert-error">
                  {error}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="donorName">Name *</label>
                <input
                  type="text"
                  id="donorName"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="donorEmail">Email *</label>
                <input
                  type="email"
                  id="donorEmail"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="donorPhone">Phone *</label>
                <input
                  type="tel"
                  id="donorPhone"
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value)}
                  required
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label>Select Amount (₹)</label>
                <div className="amount-buttons">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      className={`amount-btn ${amount === amt.toString() ? 'active' : ''}`}
                      onClick={() => handleAmountSelect(amt.toString())}
                    >
                      ₹{amt.toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>
                <div className="custom-amount">
                  <input
                    type="number"
                    value={customAmount}
                    onChange={handleCustomAmount}
                    placeholder="Or enter custom amount"
                    min="1"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="3"
                  placeholder="Leave a message with your donation..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary donate-btn" disabled={loading}>
                {loading ? (
                  <>Processing...</>
                ) : (
                  <>
                    <FaCreditCard /> Donate Now
                  </>
                )}
              </button>

              <p className="secure-payment">
                <FaLock /> Secured by Razorpay
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;

