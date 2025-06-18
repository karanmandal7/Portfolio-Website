require('dotenv').config()
const express = require('express')
const cors = require('cors')
const contactRoutes = require('./routes/contact')

const app = express()

const allowedOrigins = [
  'http://localhost:5173'
];
app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? true : allowedOrigins
}))
app.use(express.json())

app.use('/api/contact', contactRoutes)

module.exports = app
