import React, { useState, useEffect } from "react";
import NewTeamForm from "../Forms/NewTeamForm";
import { listenForTeamData, saveScoreData, deleteTeamData } from "../firebase";
import RecordScore from "../Forms/RecordScore";
import { Link } from "react-router-dom";
function ManageTeams({ saveTeamData }) {
  const [teams, setTeams] = useState([]);
  const [showNewTeamForm, setShowNewTeamForm] = useState(false);
  const [showRecordScoreForm, setShowRecordScoreForm] = useState(false);
  useEffect(() => {
    // get match data on page load
    listenForTeamData((data) => {
      setTeams(data);
    });
  }, []);

  const handleSaveTeamData = (team) => {
    saveTeamData(team);
    setTeams((prevTeams) => [...prevTeams, team]);
  };
  const handleAddNewTeam = () => {
    setShowNewTeamForm(!showNewTeamForm);
    if(showRecordScoreForm) setShowRecordScoreForm(!showRecordScoreForm);
  };
  const handleAddNewScore = () => {
    setShowRecordScoreForm(!showRecordScoreForm);
    if(showNewTeamForm) setShowNewTeamForm(!showNewTeamForm);
  };





  return (
    <>
    <div className="bg-gray-100 position-absolute top-0 start-0 w-100 h-100 bg-dark">
      <Link className="text-2xl" to="/"><h4>⬅ Return Home</h4></Link>
    </div>
    <div className="grid h-screen place-items-center bg-gray-100">

      <div className="text-center mx-8 my-8 w-3/4 h-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-4">Manage Teams</h1>
        <h3 className="text-lg font-medium mb-4">Current Teams</h3>
        <ul className="mb-4">
          {teams && !showNewTeamForm && !showRecordScoreForm &&
            Object.keys(teams).map((teamId) => (
              <li key={teamId} className="mb-4">
                <h4 className="text-xl font-medium mb-2">{teams[teamId].name}</h4>
                <ul>
                  {teams[teamId].players && teams[teamId].players.map((player, index) => (
                    <li key={index} className="text-sm mb-1">
                      {player}
                    </li>
                  ))}
                </ul>
                <a className="text-sm text-red-500 hover:cursor-pointer hover:text-red-400" onClick={() => deleteTeamData(teamId)}>Delete Team</a>
              </li>
            ))}
        </ul>

        <div className="flex justify-center mb-8">
          <button
            className={`${showNewTeamForm ? 'bg-purple-200' : 'bg-purple-600'} transition ease-in-out text-white py-2 px-4 rounded-lg mr-4`}
            onClick={handleAddNewTeam}
          >
            Add New Team
          </button>
          <button
            className={`${showRecordScoreForm ? 'bg-purple-200' : 'bg-purple-600'} transition ease-in-out text-white py-2 px-4 rounded-lg`}
            onClick={handleAddNewScore}
          >
            Record New Score
          </button>
        </div>

        {showNewTeamForm && <NewTeamForm onSaveTeamData={handleSaveTeamData} />}

        {teams && showRecordScoreForm && (
          <RecordScore teams={teams} onSaveScore={saveScoreData} />
        )}
      </div>
    </div>
    </>
  );
}

export default ManageTeams;