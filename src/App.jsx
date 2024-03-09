import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import Login.jsx from auth folder
import Login from './auth/Login'
//import Register.jsx from auth folder
import Register from './auth/Register'
//import Home.jsx from components folder
import Home from './components/home'
import Feed from './components/Feed'
import Nav from './components/Nav'
import Footer from './components/Footer'
import MyFood from './components/MyFood'
import Profile from './components/Profile'
import FoodPage from './components/FoodPage'
import AddFood from './components/AddFood'
//import app.css
import './index.css'
import { useEffect, useState } from 'react'

function App() {
  
  return (
    <>
    <Nav />

    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/food/:name" element={<FoodPage />} /> 
        <Route path="/add-food" element={<AddFood />} />
        <Route path="/my-food" element={<MyFood />} />
      </Routes>
    </Router>

    <Footer />
    </>
  )
}

export default App
