import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Navbar" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
