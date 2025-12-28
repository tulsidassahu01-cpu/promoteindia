const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const Razorpay = require('razorpay');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'promote_india_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.log('MySQL connection error:', err);
    console.log('Note: Make sure MySQL is running and database is created');
  } else {
    console.log('MySQL Connected successfully');
    initializeDatabase();
  }
});

// Initialize Database Tables
function initializeDatabase() {
  // Create contact submissions table
  const createContactTable = `
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(20),
      message TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  // Create volunteer registrations table
  const createVolunteerTable = `
    CREATE TABLE IF NOT EXISTS volunteer_registrations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      address TEXT,
      program_interest VARCHAR(100),
      message TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  // Create donations table
  const createDonationsTable = `
    CREATE TABLE IF NOT EXISTS donations (
      id INT AUTO_INCREMENT PRIMARY KEY,
      donor_name VARCHAR(255) NOT NULL,
      donor_email VARCHAR(255) NOT NULL,
      donor_phone VARCHAR(20) NOT NULL,
      amount DECIMAL(10, 2) NOT NULL,
      currency VARCHAR(10) DEFAULT 'INR',
      razorpay_order_id VARCHAR(255),
      razorpay_payment_id VARCHAR(255),
      razorpay_signature VARCHAR(255),
      status VARCHAR(50) DEFAULT 'pending',
      message TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_email (donor_email),
      INDEX idx_status (status),
      INDEX idx_created_at (created_at)
    )
  `;

  db.query(createContactTable, (err) => {
    if (err) console.log('Error creating contact table:', err);
    else console.log('Contact table ready');
  });

  db.query(createVolunteerTable, (err) => {
    if (err) console.log('Error creating volunteer table:', err);
    else console.log('Volunteer table ready');
  });

  db.query(createDonationsTable, (err) => {
    if (err) console.log('Error creating donations table:', err);
    else console.log('Donations table ready');
  });
}

// API Routes

// Contact Form Submission
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const query = 'INSERT INTO contact_submissions (name, email, phone, message) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, phone || null, message], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Failed to submit contact form' });
    }
    res.json({ success: true, message: 'Contact form submitted successfully', id: result.insertId });
  });
});

// Volunteer Registration
app.post('/api/volunteer', (req, res) => {
  const { name, email, phone, address, programInterest, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: 'Name, email, and phone are required' });
  }

  const query = 'INSERT INTO volunteer_registrations (name, email, phone, address, program_interest, message) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [name, email, phone, address || null, programInterest || null, message || null], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Failed to register volunteer' });
    }
    res.json({ success: true, message: 'Volunteer registration successful', id: result.insertId });
  });
});

// Get contact submissions (admin - optional)
app.get('/api/contacts', (req, res) => {
  const query = 'SELECT * FROM contact_submissions ORDER BY created_at DESC';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch contacts' });
    }
    res.json(results);
  });
});

// Get volunteer registrations (admin - optional)
app.get('/api/volunteers', (req, res) => {
  const query = 'SELECT * FROM volunteer_registrations ORDER BY created_at DESC';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch volunteers' });
    }
    res.json(results);
  });
});

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || ''
});

// Create Razorpay Order
app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, currency = 'INR', donorName, donorEmail, donorPhone, message } = req.body;

    if (!amount || amount < 100) {
      return res.status(400).json({ error: 'Amount must be at least ₹1 (100 paise)' });
    }

    const options = {
      amount: Math.round(amount), // Amount in paise
      currency: currency,
      receipt: `receipt_${Date.now()}`,
      notes: {
        donorName: donorName || '',
        donorEmail: donorEmail || '',
        donorPhone: donorPhone || '',
        message: message || ''
      }
    };

    const order = await razorpay.orders.create(options);

    res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID
    });
  } catch (error) {
    console.error('Razorpay order creation error:', error);
    res.status(500).json({ error: 'Failed to create order. Please try again.' });
  }
});

// Verify Razorpay Payment
app.post('/api/verify-payment', (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      donorName,
      donorEmail,
      donorPhone,
      amount,
      message
    } = req.body;

    // Verify signature
    const text = `${razorpay_order_id}|${razorpay_payment_id}`;
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || '')
      .update(text)
      .digest('hex');

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false, error: 'Invalid payment signature' });
    }

    // Save donation to database
    const query = `INSERT INTO donations 
      (donor_name, donor_email, donor_phone, amount, razorpay_order_id, razorpay_payment_id, razorpay_signature, status, message) 
      VALUES (?, ?, ?, ?, ?, ?, ?, 'success', ?)`;

    const amountInRupees = parseFloat(amount);

    db.query(
      query,
      [donorName, donorEmail, donorPhone, amountInRupees, razorpay_order_id, razorpay_payment_id, razorpay_signature, message || null],
      (err, result) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({ success: false, error: 'Failed to save donation' });
        }

        res.json({
          success: true,
          message: 'Payment verified and donation recorded successfully',
          donationId: result.insertId
        });
      }
    );
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({ success: false, error: 'Payment verification failed' });
  }
});

// Get donations (admin - optional)
app.get('/api/donations', (req, res) => {
  const query = 'SELECT * FROM donations ORDER BY created_at DESC';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch donations' });
    }
    res.json(results);
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Promote India Foundation API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

