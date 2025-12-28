# Razorpay Integration Setup Guide

## Overview

The Promote India Foundation website includes Razorpay payment integration for accepting donations. This guide will help you set up Razorpay for your website.

## Prerequisites

1. A Razorpay account (Sign up at https://razorpay.com/)
2. Razorpay API keys (Key ID and Key Secret)

## Step 1: Create Razorpay Account

1. Go to https://razorpay.com/
2. Sign up for a Razorpay account
3. Complete the KYC verification process
4. Once verified, you'll get access to your dashboard

## Step 2: Get API Keys

1. Log in to your Razorpay Dashboard
2. Go to **Settings** → **API Keys**
3. Click on **Generate Test Key** (for testing) or use **Live Keys** (for production)
4. Copy your **Key ID** and **Key Secret**

## Step 3: Configure Environment Variables

1. Open `server/.env` file
2. Add your Razorpay credentials:

```env
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=your_key_secret_here
```

**Important:** 
- For testing, use Test Mode keys (they start with `rzp_test_`)
- For production, use Live Mode keys (they start with `rzp_live_`)
- Never commit your `.env` file to version control

## Step 4: Frontend Configuration (Optional)

If you want to set the Razorpay Key ID directly in the frontend (not recommended for production), you can add it to `client/.env`:

```env
REACT_APP_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
```

However, the backend will provide the key ID automatically, so this is optional.

## Step 5: Test the Integration

1. Start your server: `cd server && npm run dev`
2. Start your client: `cd client && npm start`
3. Navigate to the Donate page
4. Fill in the donation form
5. Click "Donate Now"
6. You'll be redirected to Razorpay's payment gateway
7. Use Razorpay's test cards for testing:
   - **Card Number:** 4111 1111 1111 1111
   - **CVV:** Any 3 digits
   - **Expiry:** Any future date
   - **Name:** Any name

## Test Cards for Different Scenarios

### Successful Payment
- Card: 4111 1111 1111 1111
- CVV: Any
- Expiry: Any future date

### Failed Payment
- Card: 5104 0600 0000 0008
- CVV: Any
- Expiry: Any future date

### 3D Secure Authentication
- Card: 5267 3181 8797 5449
- CVV: Any
- Expiry: Any future date

## Payment Flow

1. **User fills donation form** → Frontend sends amount and donor details to backend
2. **Backend creates Razorpay order** → Returns order ID and amount
3. **Frontend opens Razorpay checkout** → User completes payment
4. **Razorpay redirects back** → Payment verification happens on backend
5. **Backend verifies signature** → Saves donation to database
6. **Success message shown** → User sees confirmation

## API Endpoints

### Create Order
```
POST /api/create-order
Body: {
  amount: 10000, // in paise (₹100 = 10000 paise)
  currency: "INR",
  donorName: "John Doe",
  donorEmail: "john@example.com",
  donorPhone: "1234567890",
  message: "Optional message"
}
```

### Verify Payment
```
POST /api/verify-payment
Body: {
  razorpay_order_id: "order_xxx",
  razorpay_payment_id: "pay_xxx",
  razorpay_signature: "signature_xxx",
  donorName: "John Doe",
  donorEmail: "john@example.com",
  donorPhone: "1234567890",
  amount: "100",
  message: "Optional message"
}
```

## Database

Donations are automatically saved to the `donations` table with the following information:
- Donor details (name, email, phone)
- Amount and currency
- Razorpay payment IDs
- Payment status
- Timestamp

## Security Notes

1. **Never expose your Key Secret** - It should only be on the backend
2. **Always verify signatures** - The backend verifies Razorpay signatures to prevent fraud
3. **Use HTTPS in production** - Required for secure payment processing
4. **Store keys securely** - Use environment variables, never hardcode

## Troubleshooting

### Payment Not Processing
- Check if Razorpay keys are correct in `.env`
- Verify the amount is in paise (multiply by 100)
- Check server logs for errors

### Signature Verification Failed
- Ensure Key Secret is correct
- Check that order ID and payment ID match
- Verify the signature generation logic

### Database Errors
- Ensure the `donations` table is created
- Check MySQL connection
- Verify table schema matches the code

## Production Checklist

- [ ] Switch to Live Mode keys
- [ ] Complete Razorpay KYC
- [ ] Enable HTTPS
- [ ] Test with real payment (small amount)
- [ ] Set up webhook for payment notifications (optional)
- [ ] Configure email notifications
- [ ] Set up payment analytics

## Support

For Razorpay-specific issues:
- Razorpay Documentation: https://razorpay.com/docs/
- Razorpay Support: support@razorpay.com

For application-specific issues, check the main README.md

