// src/main.jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css' // index.css imports ./assets/css/*.css

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
