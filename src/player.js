import { gameboardFactory } from './gameboardFactory.js';

export default function Player() {
  // Create Gameboard.
  const gameboard = gameboardFactory();

  // Attack enemy Gameboard.
  const attack = (enemyGameboard, x, y) => {
    enemyGameboard.receiveAttack([x, y]);
  };

  // Return Gameboard.
  const getBoard = () => gameboard;

  return { attack, getBoard };
}