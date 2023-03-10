import React, { useState } from "react";
import PropTypes from "prop-types";
import SelectTeam from "../components/SelectTeam";

const RecordScore = ({ teams, onSaveScore }) => {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);

  const handleSaveScore = (e) => {
    e.preventDefault();
    let timestamp = new Date().getTime();
    onSaveScore({ team1, team2, team1Score, team2Score, timestamp });
  };

  return (
    <form
      onSubmit={handleSaveScore}
      className="w-1/2 mx-auto mt-8 bg-white shadow-md rounded-md p-6"
    >
      <div className="mb-4">
        <label htmlFor="team1" className="block text-gray-700 font-bold mb-2">
          Team 1:
        </label>
        <SelectTeam
          teams={teams}
          onChange={setTeam1}
          className="w-full border rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="team1Score"
          className="block text-gray-700 font-bold mb-2"
        >
          Team 1 Score:
        </label>
        <input
          type="number"
          value={team1Score}
          onChange={(e) => setTeam1Score(parseInt(e.target.value))}
          className="w-full border rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="team2" className="block text-gray-700 font-bold mb-2">
          Team 2:
        </label>
        <SelectTeam
          teams={teams}
          onChange={setTeam2}
          className="w-full border rounded-md p-2"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="team2Score"
          className="block text-gray-700 font-bold mb-2"
        >
          Team 2 Score:
        </label>
        <input
          type="number"
          value={team2Score}
          onChange={(e) => setTeam2Score(parseInt(e.target.value))}
          className="w-full border rounded-md p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md"
      >
        Save Score
      </button>
    </form>
  );
};

RecordScore.propTypes = {
  teams: PropTypes.array.isRequired,
  onSaveScore: PropTypes.func.isRequired,
};

export default RecordScore;
