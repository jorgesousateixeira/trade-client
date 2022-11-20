import { useState } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css'
import { PublicHome } from './pages/public/home/publicHome';
import { Login } from './pages/public/login/login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
              <Routes>
                  <Route path="/" element={<PublicHome />} />
                  <Route path="/public" element={<PublicHome />} />
                  <Route path="/public/login" element={<Login />} />
              </Routes>
              <ToastContainer autoClose={3000} />
  </BrowserRouter>
  )
}

export default App
