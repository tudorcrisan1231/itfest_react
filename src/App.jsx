import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import Login.jsx from auth folder
import Login from './auth/Login'
//import Register.jsx from auth folder
import Register from './auth/Register'
//import Home.jsx from components folder
import Home from './components/home'
import Profile from './components/Profile'
import FoodPage from './components/FoodPage'
//import app.css
import './index.css'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/food" element={<FoodPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
