import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const ManageAccount = () => {
  const { currentUser } = useAuth();
  const displayName =
    (currentUser && currentUser.displayName) ||
    (currentUser && currentUser.email) ||
    null;

  return (
    <div>
      {currentUser ? (
        <div className="flex">
          <p className="whitespace-nowrap self-center pr-3 font-extralight text-sm">
            {displayName}
          </p>{" "}
          <img
            width="36"
            height="36"
            alt={displayName}
            src={
              currentUser.photoURL ??
              `https://placehold.jp/42/dd6699/ffffff/100x100.png?text=${displayName[0].toUpperCase()}`
            }
            className="rounded-full"
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
