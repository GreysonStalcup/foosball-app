import React from "react";

const TopPlayersData  = {
  "players": {
    "Player 1": {
      "profileURL": "https://placebear.com/24/24",
      "wins": 3,
      "losses": 2,
      "lastWin": "3 days Ago",
      "lastLoss": "1 day ago",
      "winRatio": 60,
    },
    "Player 2": {
      "profileURL": "https://placebear.com/24/24",
      "wins": 7,
      "losses": 2,
      "lastWin": "1 hour ago",
      "lastLoss": "3 days ago",
      "winRatio": 78,
    },
  }
}

const TopPlayers = () => {
  return (
    <div className="w-full bg-white rounded-2xl h-fit-content mx-auto mt-10 p-4 shadow-md">
      <table className="w-full font-extralight">
        <thead>
          <tr>
            <th className="w-1/2 text-left">Top Players</th>
            <th className="font-extralight">Wins</th>
            <th className="font-extralight">Losses</th>
            <th className="font-extralight">Last Win</th>
            <th className="font-extralight">Last Loss</th>
            <th className="font-extralight">Win Ratio / %</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {
            Object.keys(TopPlayersData.players).map((player, index) => {
              return (
                <tr key={index}>
                  <td className="text-left flex align-middle items-center my-1"><img className="rounded-full mr-2" src={TopPlayersData.players[player].profileURL} />{player}</td>
                  <td>{TopPlayersData.players[player].wins}</td>
                  <td>{TopPlayersData.players[player].losses}</td>
                  <td>{TopPlayersData.players[player].lastWin}</td>
                  <td>{TopPlayersData.players[player].lastLoss}</td>
                  <td>{TopPlayersData.players[player].winRatio}%</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TopPlayers;
