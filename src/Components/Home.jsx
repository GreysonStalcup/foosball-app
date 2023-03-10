import React from 'react';
import { Link } from 'react-router-dom';
import Scoreboard from './Scoreboard';
import SignUp from '../auth_signup_password';
function Home() {
  return (
    <div>
      <Scoreboard />
      {/* <Link to="/manage-teams">Manage Teams</Link> */}
    </div>
  );
}

export default Home;