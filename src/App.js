import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './Components/Home';
import { listenForMatchData, saveMatchData } from "./firebase";
import ManageTeams from './Components/ManageTeams';
import SignIn from './Components/SignIn';
import SignOut from './auth/SignOut';
function App() {

  return (
    <div id="app">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/manage-teams" element={<ManageTeams />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/auth/logout" element={<SignOut />}  />
    </Routes>
    </div>
    // <div className="App">
    //   <h1>Foosball Tournament</h1>
    //   <MatchList matchData={matchData} onSaveMatchData={handleSaveMatchData} />
    // </div>
  );
}

export default App;