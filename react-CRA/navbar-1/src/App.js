import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// * Components 
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

// ! In React Router 6 "Switch" component has been replaced by "Routes" component