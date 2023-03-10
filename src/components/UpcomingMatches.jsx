import React from 'react'
import { Link } from 'react-router-dom'
export default function UpcomingMatches() {
  return (
    <div className="relative w-full md:w-1/2 h-72 mr-2 bg-white rounded-2xl mx-auto mt-10 p-4 shadow-md">
      <p className="font-bold">Upcoming Matches</p>
      <Link className="absolute bottom-5 right-5 font-extralight" to="/matches">View All &#x2192;</Link>
    </div>
  )
}
