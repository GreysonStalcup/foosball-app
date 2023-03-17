import React, { useEffect } from 'react'
import { getAllPlayers } from '../firebase'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Players = () => {
  const [players, setPlayers] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  useEffect(() => {
    const getPlayers = getAllPlayers().then((players) => {
      setPlayers(players)
      setLoading(false)
    })
  }, []);

    // console.log(players);
  return (
    <div className='my-32'>
      <div className='bg-white w-3/4 mx-auto p-4 rounded-lg shadow-lg self-center'>
        <p className='font-bold'>All Players</p>
      <table className='w-full text-center'>
        <thead>
          <tr>
            <th></th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Win Ratio</th>
          </tr>
        </thead>
        <tbody>
        {loading ? (
              <tr>
                <td className='w-3/4 text-start flex'>
                  <Skeleton count={4} circle={true} height={26} width={26} />
                  
                </td>
                <td><Skeleton count={4} /></td>
                <td><Skeleton count={4} /></td>
                <td><Skeleton count={4} /></td>

              </tr>
        ) : (

        Object.keys(players).map((player, index) => {
          return (
            <tr key={index} className='mb-10'>
              <td className="w-3/4 text-start flex">
                
              <img
                width="26"
                height="26"
                alt={players[player].displayName}
                src={
                players[player].profileURL ??
               `https://placehold.jp/42/567d46/ffffff/100x100.png?text=${players[player].displayName[0].toUpperCase()}`
            }
            className="rounded-full mr-2"
          />
                {players[player].displayName}
                </td>
              <td>{players[player].wins}</td>
              <td>{players[player].losses}</td>
              <td>{Math.floor((players[player].wins / (players[player].wins + players[player].losses)) * 100)}%</td>
            </tr>
          
          
       )})
        )}
       </tbody>
       </table>
        
    </div>
    </div>
  )
}
  

export default Players;
