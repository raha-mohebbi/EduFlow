import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Dashboard from "./components/DashBoard/Dashboard";
import Profile from "./components/Navbar/Profile";
import CreateProfile from "./components/CreateProfile";
import Cart from "./components/Cart";
import CourseDetails from "./components/DashBoard/CourseDetails";


function App() {

  const { user, profile, loading } = useAuth();


  if (loading) {
    return <h1>Loading...</h1>;
  }


  return (

    <Routes>


      {/* Root */}
      <Route
        path="/"
        element={
          user
          ? <Navigate to="/home" replace />
          : <Navigate to="/login" replace />
        }
      />



      {/* Login */}
      <Route
        path="/login"
        element={
          user
          ? <Navigate to="/home" replace />
          : <Login />
        }
      />



      {/* Home */}
      <Route
        path="/home"
        element={
          user ? (
            profile
            ? <HomePage />
            : <Navigate to="/create-profile" replace />
          )
          :
          <Navigate to="/login" replace />
        }
      />



      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          user
          ? <Dashboard />
          : <Navigate to="/login" replace />
        }
      />



      {/* Profile */}
      <Route
        path="/profile"
        element={
          user
          ? <Profile />
          : <Navigate to="/login" replace />
        }
      />



      {/* Create Profile */}
      <Route
        path="/create-profile"
        element={
          user
          ? <CreateProfile />
          : <Navigate to="/login" replace />
        }
      />



      {/* Cart */}
      <Route
        path="/cart"
        element={
          user
          ? <Cart />
          : <Navigate to="/login" replace />
        }
      />



      {/* Course Details */}
      <Route
        path="/course/:id"
        element={
          user
          ? <CourseDetails />
          : <Navigate to="/login" replace />
        }
      />



      {/* Not Found */}
      <Route
        path="*"
        element={
          user
          ? <Navigate to="/home" replace />
          : <Navigate to="/login" replace />
        }
      />


    </Routes>

  );

}


export default App;