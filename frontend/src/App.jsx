import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "./main";
import Login from "./Pages/Login";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } =
    useContext(Context);

  useEffect(() => {
    // Simulate user authentication and set user data locally
    const simulateUserAuthentication = () => {
      // Simulate successful authentication
      setIsAuthenticated(true);
      // Simulate user data
      const simulatedUser = {
        firstName: "John",
        lastName: "Doe",
        email: "user@example.com",
      };
      setUser(simulatedUser);
    };
    // Call the function to simulate user authentication
    simulateUserAuthentication();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Uncomment and add more routes as needed */}
          {/* <Route path="/appointment" element={<Appointment />} /> */}
          {/* <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;