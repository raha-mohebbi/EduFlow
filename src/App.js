import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "./hooks/useAuth";

import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Dashboard from "./components/DashBoard/Dashboard";
import Profile from "./components/Navbar/Profile";
import CreateProfile from "./components/CreateProfile";
import Cart from "./components/Cart";

function App() {
  const { user, profile, loading } = useAuth();

  const [cart, setCart] = useState([]);

  const addToCart = (course) => {
    setCart((prev) => [...prev, course]);
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <Routes>
      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/home" replace />}
      />

      <Route
        path="/home"
        element={
          user ? (
            profile ? (
              <HomePage />
            ) : (
              <Navigate to="/create-profile" replace />
            )
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="/dashboard"
        element={
          user ? (
            <Dashboard addToCart={addToCart} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="/profile"
        element={user ? <Profile /> : <Navigate to="/login" replace />}
      />

      <Route
        path="/create-profile"
        element={user ? <CreateProfile /> : <Navigate to="/login" replace />}
      />

      <Route
        path="/cart"
        element={user ? <Cart cart={cart} /> : <Navigate to="/login" replace />}
      />

      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default App;
