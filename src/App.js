import React from "react";
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import DashboardStarter from "./Components/Starter/DashboardStarter";
import ClassOnline from "./Components/Starter/ClassOnline";
import Tutors from "./Components/Starter/Tutors";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/starter" element={<DashboardStarter />} />
        <Route path="/class" element={<ClassOnline />} />
        <Route path="/tutors" element={<Tutors />} />
      </Routes>
    </>
  );
};

export default App;
