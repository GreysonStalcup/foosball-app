import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import ManageTeams from "./Components/ManageTeams";
import Login from "./pages/Login";
import SignOut from "./auth/SignOut";
import Header from "./Components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage-teams" element={<ManageTeams />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth/logout" element={<SignOut />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
