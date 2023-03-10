import React, { useState } from "react";

function AddScore({ teamId, onSaveScore }) {
  const [score, setScore] = useState(0);

  const handleScoreChange = (event) => {
    setScore(Number(event.target.value));
  };

  const handleSave = () => {
    onSaveScore(teamId, score);
    setScore(0);
  };

  return (
    <div className="flex flex-col items-center">
      <label className="text-lg mb-2">Score:</label>
      <div className="flex items-center">
        <input
          className="border border-gray-400 rounded-md py-2 px-3 mr-2 w-24 focus:outline-none focus:border-purple-500"
          type="number"
          value={score}
          onChange={handleScoreChange}
        />
        <button
          className="py-2 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          onClick={handleSave}
        >
          Save Score
        </button>
      </div>
    </div>
  );

export default AddScore;