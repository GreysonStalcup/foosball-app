import React from 'react'

export default function TopPlayers() {
  return (
    <div className='w-3/4 bg-white rounded-lg h-24 mx-auto mt-10 p-2'>
        <table className='w-full font-extralight'>
            <th className="w-1/2 text-left">Top Players</th>
            <th className="font-extralight">Wins</th>
            <th className="font-extralight">Losses</th>
            <th className="font-extralight">Last Win</th>
            <th className="font-extralight">Last Loss</th>
            <th className="font-extralight">Win Ratio / %</th>

        </table>
    </div>
  )
}
