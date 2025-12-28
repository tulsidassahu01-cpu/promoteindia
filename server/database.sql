-- Promote India Foundation Database Schema
-- Run this SQL script to manually create the database and tables if needed

CREATE DATABASE IF NOT EXISTS u256949449_promote_india_;
USE u256949449_promote_india_;

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_created_at (created_at)
);

-- Volunteer Registrations Table
CREATE TABLE IF NOT EXISTS volunteer_registrations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  address TEXT,
  program_interest VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_program_interest (program_interest),
  INDEX idx_created_at (created_at)
);

-- Donations Table
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
);

-- Sample data (optional)
-- INSERT INTO contact_submissions (name, email, phone, message) 
-- VALUES ('Test User', 'test@example.com', '1234567890', 'This is a test message');

