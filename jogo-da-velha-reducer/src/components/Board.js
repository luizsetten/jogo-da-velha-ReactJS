import React, { useContext, useEffect } from 'react';
import uuid from 'uuid/dist/v4';

import { GameContext } from '../contexts/GameContext';
import calculateWinner from '../utils/CalculateWinner';

import Square from './Square';
import Player from './Player';
import Reset from './Reset';
import Winner from './Winner';
import History from './History';

export default function Board() {
  const {
    state: { squares, history },
    dispatch,
  } = useContext(GameContext);

  useEffect(() => {
    const winner = calculateWinner(squares);

    if (winner) dispatch({ type: 'UPDATE_WINNER', payload: winner });
  }, [dispatch, history, squares]);

  return (
    <div className="board-container">
      <Player />
      <Reset />
      <Winner />
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value} index={index} key={uuid()} />
        ))}
      </div>

      <History />
    </div>
  );
}
