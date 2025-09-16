
import React from 'react';

export default function MatchList({ matches }) {
  return (
    <div className="match-list">
      <h3>Mis Matches</h3>
      <ul>
        {matches.map(match => (
          <li key={match.id}>
            {match.userA.firstName} & {match.userB.firstName}
          </li>
        ))}
      </ul>
    </div>
  );
}
