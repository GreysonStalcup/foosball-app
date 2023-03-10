import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import ManageTeams from "./components/ManageTeams";
import Login from "./pages/Login";
import SignOut from "./pages/SignOut";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<SignOut />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-teams" element={<ManageTeams />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
