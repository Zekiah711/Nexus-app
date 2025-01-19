import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import LoadingSpinner from "./components/LoadingSpinner";
import Home from "./components/home/Home";
import Dashboard from "./components/dashboard/Dashboard";
import LoginPage from "./components/login/Login"
import SignUp from "./components/login/Signup";
import Courses from "./components/courses/Courses";



function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Loader duration (2 seconds here)

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner /> // Show loader during loading
      ) : (
        <div>
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;

