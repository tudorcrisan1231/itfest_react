import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import Login.jsx from auth folder
import Login from './auth/Login'
//import Register.jsx from auth folder
import Register from './auth/Register'
//import Home.jsx from components folder
import Home from './components/home'

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
      </Routes>
    </Router>
    </>
  )
}

export default App
