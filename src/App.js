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
    setCart((prev) => {
      const exists = prev.find((item) => item.id === course.id);

      if (exists) {
        return prev;
      }

      return [...prev, course];
    });
  };
const removeFromCart = (id) => {
  setCart((prev) =>
    prev.filter((item) => item.id !== id)
  );
};

  if (loading) {
    return <h1>Loading...</h1>;
  }


  return (
    <Routes>

      {/* Root */}
      <Route
        path="/"
        element={
          user ? (
            <Navigate to="/home" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />


      {/* Login */}
      <Route
        path="/login"
        element={
          user ? (
            <Navigate to="/home" replace />
          ) : (
            <Login />
          )
        }
      />


      {/* Home */}
   <Route
 path="/home"
 element={
   user ? (
     profile ? (
       <HomePage addToCart={addToCart}
       cart={cart}/>
     ) : (
       <Navigate to="/create-profile" />
     )
   ) : (
     <Navigate to="/login" />
   )
 }
/>


      {/* Dashboard */}
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


      {/* Profile */}
      <Route
        path="/profile"
        element={
          user ? (
            <Profile />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />


      {/* Create Profile */}
      <Route
        path="/create-profile"
        element={
          user ? (
            <CreateProfile />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />


      {/* Cart */}
    <Route
  path="/cart"
  element={
    user ? (
      <Cart 
        cart={cart}
        removeFromCart={removeFromCart}
      />
    ) : (
      <Navigate to="/login" replace />
    )
  }
/>


      {/* Unknown routes */}
      <Route
        path="*"
        element={
          user ? (
            <Navigate to="/home" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

    </Routes>
  );
}

export default App;