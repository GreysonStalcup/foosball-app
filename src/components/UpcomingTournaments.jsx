import React from 'react'
import { Link } from 'react-router-dom'

export default function UpcomingTournaments() {
  return (
    <div className="relative w-full md:w-1/2 ml-2 bg-white rounded-2xl h-36 mx-auto mt-10 p-4 shadow-md float-left">
     <p className="font-bold">Upcoming Tournaments</p>
     <Link className="absolute bottom-5 right-5 font-extralight" to="/tournaments">View All &#x2192;</Link>
    </div>
  )
}
