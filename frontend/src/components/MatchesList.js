import React from 'react';

const mockMatches = [
  { id: 1, name: 'Ana' },
  { id: 2, name: 'Sofía' },
];

export default function MatchesList({ onSelectMatch }) {
  return (
    <div>
      <h4>Matches</h4>
      {mockMatches.map((match) => (
        <div key={match.id} onClick={() => onSelectMatch(match)}>
          {match.name}
        </div>
      ))}
    </div>
  );
}
