import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const ManageAccount = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      {currentUser ? (
        <div className="flex">
          <p className="whitespace-nowrap self-center pr-3 font-extralight text-sm">
            {currentUser.displayName || currentUser.email}
          </p>{" "}
          <img
            className="rounded-full"
            src={
              currentUser.photoURL ??
              "https://api.lorem.space/image/game?w=36&h=36"
            }
          />
        </div>
      ) : (
        <Link
          to="/login"
          className="whitespace-nowrap self-center pr-3 font-extralight text-sm"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default ManageAccount;
