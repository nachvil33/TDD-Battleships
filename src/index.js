import './style.css';
import {
  drawGrid,
  showAction,
  updatePlacingShip,
  createAlert,
  startPlacing,
  handleRotateTextClick,
} from './domManager.js';
import game from './game.js';

const gameInstance = game();

// draw the boards
drawGrid();
drawGrid('enemy');

// Show action to the player
showAction('player', 'Place your ships');
showAction('enemy', 'Waiting For Ships', 'alert');

updatePlacingShip('Aircraftcarrier');

const alertMessage = 'Game started, place your ships <span id="rotateText">(Press R to rotate)</span>';
createAlert('success', alertMessage);

// Add event listener to the "Press R to rotate" text
handleRotateTextClick(); // Llama a la función handleRotateTextClick para manejar el evento de clic

startPlacing(gameInstance, 'horizontal', 'Aircraftcarrier');
