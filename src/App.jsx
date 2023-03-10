import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import ManageTeams from "./Components/ManageTeams";
import SignIn from "./Components/SignIn";
import SignOut from "./auth/SignOut";
import Header from "./Components/Header";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
    <div id="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage-teams" element={<ManageTeams />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/auth/logout" element={<SignOut />} />
      </Routes>
    </div>
  );
}

export default App;
