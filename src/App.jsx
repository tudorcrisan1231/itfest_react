import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import { useLocalStorage } from "./hooks/useStorage";
import Register from "./auth/Register";
import Home from "./components/home";
import Feed from "./components/Feed";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MyFood from "./components/MyFood";
import Profile from "./components/Profile";
import FoodPage from "./components/FoodPage";
import AddFood from "./components/AddFood";
import "./index.css";

1;
function App() {
  const logout = () => {
    remove();
    navigate("/login");
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/food/:name" element={<FoodPage />} />
          <Route path="/add-food" element={<AddFood />} />
          <Route path="/my-food" element={<MyFood />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
