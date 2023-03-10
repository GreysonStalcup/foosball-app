import React from "react";
import { Link } from "react-router-dom";
import ManageAccount from "./ManageAccount";

const Header = () => {
  return (
    <header>
      <div className="bg-white w-full h-24 top-0 left-0 shadow-md">
        <div className="flex align-middle items-center h-full justify-between">
          <div className="items-center h-full w-1/6">Logo</div>
          <div className="flex space-x-7 font-extralight text-sm justify-start w-3/4">
            <Link className="hover:text-gray-600" to="/dashboard">
              Dashboard
            </Link>
            <Link to="/roster" className="hover:text-gray-600">
              Roster
            </Link>
            <Link to="/matches" className="hover:text-gray-600">
              Matches
            </Link>
            <Link to="/tournaments" className="hover:text-gray-600">
              Tournaments
            </Link>
            <Link to="/leaderboards" className="hover:text-gray-600">
              Leaderboards
            </Link>
          </div>
          <div className="flex justify-end mr-4">
            <ManageAccount />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
