import { useState } from "react";

const Match = ({ matchId, match, onSaveMatchData }) => {
  const [localMatchData, setLocalMatchData] = useState(match);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setLocalMatchData((prevMatchData) => ({
      ...prevMatchData,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    onSaveMatchData(matchId, localMatchData);
  };

  return (
    <div className="Match">
      <h2>Match {match.id}</h2>
      <div>
        <label>
          Team 1:
          <input
            type="text"
            name="team1"
            value={localMatchData.team1}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Team 2:
          <input
            type="text"
            name="team2"
            value={localMatchData.team2}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
};

export default Match;
