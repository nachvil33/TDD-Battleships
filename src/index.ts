// Import necessary modules and styles
import './style.css';
import { createGameboard } from './gameboard';
import { createPlayer } from './player';
import { addEvents, addDraggableShips, initBoard } from './helpers';
import { ships } from './ships';

document.addEventListener('DOMContentLoaded', () => {
  // Get DOM elements
  const playerContainer = document.getElementById('player-container');
  const playerBoard = document.getElementById('player-board');
  const computerBoard = document.getElementById('computer-board');
  const startButton = document.getElementById('start-button');

  // Check if elements exist
  if (playerContainer && playerBoard && computerBoard && startButton) {
    // Initialize player board and computer board
    initBoard(playerBoard, 'player-cell');
    initBoard(computerBoard, 'computer-cell');

    // Add events for player board
    addEvents(playerBoard, 'player-cell');
    
    // Make ships draggable for player
    addDraggableShips(playerContainer);

    // Start the game on button click
    startButton.addEventListener('click', startGame);
  } else {
    console.error('One or more elements not found.');
  }
});

// Function to start the game
function startGame() {
  const shipsInContainer = document.querySelectorAll('.ship');
  const shipsOnBoard = document.querySelectorAll('#player-board .ship');

  if (shipsInContainer.length === 0 && shipsOnBoard.length > 0) {
    // Initialize player and computer gameboards
    const playerGameboard = createGameboard();
    const computerGameboard = createGameboard();

    // Create player and computer
    const player = createPlayer(playerGameboard);
    const computer = createPlayer(computerGameboard, 'basic');

    // Place computer ships randomly
    placeComputerShips(computerGameboard);

    // Add player ships to the gameboard (you need to implement this)
    // ...

    // Display computer ships (you need to implement this)
    // ...

    // Display the player and computer boards (you need to implement this)
    // ...

    // Game loop (you need to implement this)
    // ...

  } else {
    alert('Debes colocar todas las naves antes de iniciar el juego.');
  }
}

// Function to place computer ships randomly
function placeComputerShips(gameboard) {
  const computerShips = ships;
  computerShips.forEach((ship) => {
    let randomRow, randomCol, isVertical;
    do {
      randomRow = Math.floor(Math.random() * 10);
      randomCol = Math.floor(Math.random() * 10);
      isVertical = Math.random() < 0.5;
    } while (!gameboard.canPlaceShip(ship, randomRow, randomCol, isVertical));

    gameboard.placeShip(ship, randomRow, randomCol, isVertical);
  });
}
