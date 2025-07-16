const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  origin: ['https://www.pmed.club', 'https://pmed.club', 'http://localhost:3000', 'http://localhost:3001'],
  credentials: true
})); app.use(express.json());

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