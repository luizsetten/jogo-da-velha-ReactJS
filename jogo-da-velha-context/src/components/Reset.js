import React, { useContext } from 'react';

import { GameContext } from '../contexts/GameContext';

export default function Reset() {
  const { setSquares, setIsXNext, setWhoIsWinner, setHistory } = useContext(
    GameContext
  );

  function handleOnclick() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWhoIsWinner('');
    setHistory([]);
  }

  return (
    <p className="reset">
      <button type="button" onClick={handleOnclick}>
        Reset
      </button>
    </p>
  );
}
