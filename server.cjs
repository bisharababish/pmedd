const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;

// Manual CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'PMED Email Server is running', status: 'OK' });
});

// Test endpoint to verify server is running
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// Gmail SMTP setup
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || 'bisharababish@gmail.com',
    pass: process.env.SMTP_PASS || 'fbfo mzkd suwn azlu'
  }
});

app.post('/api/send-notification', async (req, res) => {
  try {
    const { to, subject, html, formData } = req.body;

    console.log('Email data:', {
      to,
      subject,
      replyTo: formData.email,
      formData
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER || 'bisharababish@gmail.com',
      to: process.env.SMTP_USER || 'bisharababish@gmail.com',
      replyTo: formData.email,
      subject: subject,
      html: html
    });

    res.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});