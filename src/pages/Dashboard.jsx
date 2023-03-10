import React from "react";
import TopPlayers from "../components/TopPlayers";
import TopTeams from "../components/TopTeams";
import UpcomingMatches from "../components/UpcomingMatches";
import UpcomingTournaments from "../components/UpcomingTournaments";
const Dashboard = () => {
  return (
    <main className="w-3/4 mx-auto mt-24">
      <TopPlayers /> 
      <TopTeams />
      <div className="md:flex">
        <UpcomingMatches />
        <UpcomingTournaments />
      </div>
    </main>
  );
};

export default Dashboard;
