import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { supabase } from "./lib/supabase";


import "./index.css";

import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Dashboard from "./components/DashBoard/Dashboard.jsx"

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });

    const { data: listener } =
      supabase.auth.onAuthStateChange((_, session) => {
        setUser(session?.user ?? null);
      });

    return () => listener.subscription.unsubscribe();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <HomePage /> : <Login />}
        />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;