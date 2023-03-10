import React, { useState } from "react";
import { saveTeamData } from "../firebase";

const NewTeamForm = () => {
  const [teamName, setTeamName] = useState("");
  const [players, setPlayers] = useState([]);

  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
  };

  const handlePlayerChange = (event, index) => {
    const newPlayers = [...players];
    newPlayers[index] = event.target.value;
    setPlayers(newPlayers);
  };

  const addPlayer = () => {
    setPlayers([...players, ""]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const teamData = {
      name: teamName,
      players: players.filter((player) => player !== ""),
    };
    saveTeamData(teamData);
    setTeamName("");
    setPlayers([]);
  };

  return (
    <div className="w-1/2 mx-auto mt-8 bg-white shadow-md rounded-md p-6">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="team-name-input" className="block font-bold mb-2">
            Team Name:
          </label>
          <input
            id="team-name-input"
            type="text"
            value={teamName}
            onChange={handleTeamNameChange}
            className="border border-gray-400 p-2 rounded-md w-full text-center"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="players-input" className="block font-bold mb-2">
            Players:
          </label>
          {players.map((player, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={player}
                onChange={(event) => handlePlayerChange(event, index)}
                className="border border-gray-400 p-2 rounded-md w-full"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addPlayer}
            className="bg-purple-500 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700"
          >
            Add Player
          </button>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700"
        >
          Save Team
        </button>
      </form>
    </div>
  );
};

export default NewTeamForm;
