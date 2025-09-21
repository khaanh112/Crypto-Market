import React from 'react'
import NavBar from './components/navbar/navBar'
import { Routes, Route } from 'react-router-dom'
import Coin from './pages/Coin/Coin'
import Home from './pages/Home/home'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App