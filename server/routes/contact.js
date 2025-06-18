const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

// (Optional if already loaded in app.js)
require('dotenv').config()

router.post('/', async (req, res) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' })
  }

  // 🚨 Use process.env here
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,      // <-- From .env
      pass: process.env.EMAIL_PASS       // <-- From .env
    }
  })

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_RECEIVER,      // <-- From .env
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('📧 Email sent:', info.response)
    res.status(200).json({ success: true, message: 'Email sent successfully!' })
  } catch (error) {
    console.error('❌ Email sending error:', error)
    res.status(500).json({ error: 'Email could not be sent. Try again later.' })
  }
})

module.exports = router

