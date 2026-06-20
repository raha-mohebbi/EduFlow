import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage";
import Dashboard from "./components/DashBoard/Dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
