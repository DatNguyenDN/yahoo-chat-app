// import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";
function App() {
  const { authUser } = useAuthContext();
  /**bg-gradient-to-r from-violet-200 to-pink-200 */
  return (
    <main
      className="h-screen w-full p-4 flex justify-center items-center 
    
    "
    >
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
      <Toaster />
    </main>
  );
}

export default App;
