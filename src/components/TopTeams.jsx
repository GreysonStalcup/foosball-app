import React from "react";

const TopTeamsData  = {
  "players": {
    "Team 1": {
      "profileURL": "https://placebear.com/24/24",
      "wins": 0,
      "losses": 0,
      "lastWin": 0,
      "lastLoss": 0,
      "winRatio": 0,
    },
    "Team 2": {
      "profileURL": "https://placebear.com/24/24",
      "wins": 0,
      "losses": 0,
      "lastWin": 0,
      "lastLoss": 0,
      "winRatio": 0,
    },
  }
}


const TopTeams = () => {
  return (
    <div className="w-full bg-white rounded-2xl h-fit-content mx-auto mt-10 p-4 shadow-md">
      <table className="w-full font-extralight">
        <thead>
          <tr>
            <th className="w-1/2 text-left">Top Teams</th>
            <th className="font-extralight">Wins</th>
            <th className="font-extralight">Losses</th>
            <th className="font-extralight">Last Win</th>
            <th className="font-extralight">Last Loss</th>
            <th className="font-extralight">Win Ratio / %</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {
            Object.keys(TopTeamsData.players).map((player, index) => {
              return (
                <tr key={index}>
                  <td className="text-left flex align-middle items-center my-1"><img className="rounded-full mr-2" src={TopTeamsData.players[player].profileURL} />{player}</td>
                  <td>{TopTeamsData.players[player].wins}</td>
                  <td>{TopTeamsData.players[player].losses}</td>
                  <td>{TopTeamsData.players[player].lastWin}</td>
                  <td>{TopTeamsData.players[player].lastLoss}</td>
                  <td>{TopTeamsData.players[player].winRatio}</td>
                </tr>
              )
            })}
          
          {/* // <td className="text-left">1</td>
          // <td>2</td>
          // <td>3</td>
          // <td>4</td>
          // <td>5</td>
          // <td>6</td> */}
        </tbody>
      </table>
    </div>
  );
};

export default TopTeams;
