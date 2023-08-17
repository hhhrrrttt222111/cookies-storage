import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AOS from 'aos';

import { LandingPage } from './pages'
import { Cookies, LocalStorage, SessionStorage } from './components'

import './App.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, [])

  return (
    <div className='app'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/local-storage" element={<LocalStorage />} />
            <Route path="/session-storage" element={<SessionStorage />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
