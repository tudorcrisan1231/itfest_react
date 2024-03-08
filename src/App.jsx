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

//import app.css
import './index.css'

function App() {
  return (
    <>
    <Nav />

    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>

    <Footer />
    </>
  )
}

export default App
