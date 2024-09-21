import React from "react";
import logo from "./logo.svg";
import Registration from "./components/auth/Registration";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
