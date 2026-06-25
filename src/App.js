import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Dashboard from "./components/DashBoard/Dashboard";
import Profile from "./components/Navbar/Profile";
import CreateProfile from "./components/CreateProfile";

function App() {
  const { user, profile, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>

      <Route
        path="/login"
        element={!user ? <Login /> : <Navigate to="/" />}
      />

     <Route
  path="/home"
  element={
    user
      ? profile
        ? <HomePage />
        : <Navigate to="/create-profile" />
      : <Navigate to="/login" />
  }
/>

      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
      />

      <Route
        path="/profile"
        element={user ? <Profile /> : <Navigate to="/login" />}
      />

      <Route
        path="/create-profile"
        element={
          user ? <CreateProfile /> : <Navigate to="/login" />
        }
      />

    </Routes>
  );
}

export default App;