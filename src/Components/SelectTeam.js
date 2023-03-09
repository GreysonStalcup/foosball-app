import React from "react";

function SelectTeam({ teams, onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <select
  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
  onChange={handleChange}
>
  <option value="">Select a team</option>
  {Object.keys(teams).map((teamId) => (
    <option key={teamId} value={teams[teamId].name}>
      {teams[teamId].name}
    </option>
  ))}
</select>
  );
}

export default SelectTeam;