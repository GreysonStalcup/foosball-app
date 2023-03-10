import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Dashboard from "./pages/Dashboard";
import Roster from "./pages/Roster";
import Matches from "./pages/Matches";
import Tournaments from "./pages/Tournaments";
import Leaderboards from "./pages/Leaderboards";
import ManageTeams from "./components/ManageTeams";

// TODO: only allow access to /login if unauthenticated
// TODO: only allow access to /logout if authenticated

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/leaderboards" element={<Leaderboards />} />
        <Route path="/roster" element={<Dashboard />} />
        <Route path="/manage-teams" element={<ManageTeams />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
