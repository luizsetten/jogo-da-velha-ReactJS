import React, { useContext } from 'react';

import { GameContext } from '../contexts/GameContext';

export default function Reset() {
  const { dispatch } = useContext(GameContext);

  function handleOnclick() {
    dispatch({ type: 'RESET' });
  }

  return (
    <p className="reset">
      <button type="button" onClick={handleOnclick}>
        Reset
      </button>
    </p>
  );
}
