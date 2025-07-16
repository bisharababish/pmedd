const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Gmail SMTP setup - FIXED
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'bisharababish@gmail.com',
    pass: 'fbfo mzkd suwn azlu'
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
      from: 'bisharababish@gmail.com',
      to: 'bisharababish@gmail.com',
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
  console.log(`Server running on http://localhost:${PORT}`);
});