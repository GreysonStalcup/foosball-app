import React from 'react'
import { getAuth } from 'firebase/auth'
import { Link } from 'react-router-dom';
export default function ManageAccount() {
  const auth = getAuth();
  const user = auth.currentUser;
  if(user) {
    user.photoURL = "https://api.lorem.space/image/game?w=36&h=36"
    user.displayName = "Greyson Stalcup"
  }
  return (
    <div>
      {user ?
       <div className="flex">
         <p className="whitespace-nowrap self-center pr-3 font-extralight text-sm">{ user.displayName }</p> <img className='rounded-full'src={ user.photoURL } />
       </div>
      : <Link to="/login" className="whitespace-nowrap self-center pr-3 font-extralight text-sm">Login</Link>}
    </div>
  )
}
