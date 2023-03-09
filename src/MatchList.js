import Match from './Match';

function MatchList({ matchData, onSaveMatchData }) {
  const matchIds = Object.keys(matchData);

  if (matchIds.length === 0) {
    return <div>No matches found</div>;
  }

  return (
    <div className="MatchList">
      {matchIds.map((matchId) => (
        
        <Match
          key={matchId}
          matchId={matchId}
          match={matchData[matchId]}
          onSaveMatchData={onSaveMatchData}
        />
      ))}
    </div>
  );
}

export default MatchList;