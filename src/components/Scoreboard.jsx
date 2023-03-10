import { useEffect, useState } from "react";
import {
  listenForScores,
  // getRealtimeDatabase,
  getMostRecentScore,
} from "../firebase";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Scoreboard = () => {
  const { currentUser } = useAuth();

  const [scores, setScores] = useState([]);
  const [latestScore, setLatestScore] = useState(null);

  useEffect(() => {
    const unsubscribe = listenForScores((newScores) => {
      setScores(newScores);
    });
    setLatestScore(getMostRecentScore);
    console.log(latestScore);
    return unsubscribe;
  }, []);

  return (
    <>
      {/* most recent score running at the top of the page */}
      {latestScore && (
        <div className="flex flex-row items-center justify-between bg-purple-600 text-white p-4">
          <div className="flex flex-row items-center">
            <h3 className="text-2xl font-bold mr-4">{latestScore.team1}</h3>
            <p className="text-2xl font-bold">{latestScore.team1Score}</p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-2xl font-bold mr-4">{latestScore.team2Score}</p>
            <h3 className="text-2xl font-bold">{latestScore.team2}</h3>
          </div>
        </div>
      )}
      {/* scoreboard */}

      <div className="grid h-screen place-items-center">
        <div className="text-center mx-8 my-8 w-3/4 h-auto bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Scoreboard</h2>
          <div className="grid grid-cols-1 gap-4 w-1/2 text-center mx-auto">
            {Object.keys(scores).map((scoreId) => (
              <div
                key={scoreId}
                className="flex flex-row items-center justify-between"
              >
                <div className="w-1/3">
                  <h3 className="text-lg font-bold">{scores[scoreId].team1}</h3>
                </div>
                <div className="w-1/3 text-center">
                  <p className="text-gray-800 text-3xl">
                    <span
                      className={`${
                        scores[scoreId].team1Score > scores[scoreId].team2Score
                          ? "text-green-500"
                          : "text-gray-800"
                      }`}
                    >
                      {scores[scoreId].team1Score}
                    </span>{" "}
                    -{" "}
                    <span
                      className={`${
                        scores[scoreId].team1Score < scores[scoreId].team2Score
                          ? "text-green-500"
                          : "text-gray-800"
                      }`}
                    >
                      {scores[scoreId].team2Score}
                    </span>
                  </p>
                </div>
                <div className="w-1/3">
                  <h3 className="text-lg font-bold">{scores[scoreId].team2}</h3>
                </div>
              </div>
            ))}
          </div>
          {currentUser && (
            <div className="flex justify-center my-8">
              <Link
                to="/manage-teams"
                className="bg-purple-600 transition ease-in-out text-white py-2 px-4 rounded-lg mr-4"
              >
                Record New Score
              </Link>
              <Link
                to="/auth/logout"
                className="bg-purple-600 transition ease-in-out text-white py-2 px-4 rounded-lg mr-4"
              >
                Sign Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Scoreboard;
