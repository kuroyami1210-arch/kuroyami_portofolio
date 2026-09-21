import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Deteksi basename otomatis agar routing jalan baik di:
// - localhost (root "/")
// - GitHub Pages subpath ("/kuroyami_portofolio")
// - custom domain root
function getBasename() {
  const path = window.location.pathname
  if (path.startsWith('/kuroyami_portofolio')) return '/kuroyami_portofolio'
  return '/'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={getBasename()}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
