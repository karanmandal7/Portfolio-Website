require('dotenv').config()
const express = require('express')
const cors = require('cors')
const contactRoutes = require('./routes/contact')
const path = require('path')

const app = express()

const allowedOrigins = [
  'http://localhost:5173'
];
app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? true : allowedOrigins
}))
app.use(express.json())

app.use('/api/contact', contactRoutes)

// Serve static files from the React app build
app.use(express.static(path.join(__dirname, 'public')))

// Handle React routing - serve index.html for all non-API routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Fallback for any other routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app
