import createShip from './Ship.js';
import createGameboard from './GameBoard.js';
import createPlayer from './Player.js';
import './Game.js';

function dragStart(e) {
    const shipType = e.target.dataset.ship;
    e.dataTransfer.setData('ship', shipType);
    e.dataTransfer.setData('text/plain', `Dragging ${shipType}`);
    e.target.classList.add('dragging');
    console.log(`Starting to drag: ${shipType}`);
}

document.querySelectorAll('.ship').forEach(ship => {
    ship.addEventListener('dragstart', dragStart);
});

document.getElementById('start-button').addEventListener('click', () => {
    const randomStart = Math.floor(Math.random() * 2);
    console.log(randomStart === 0 ? 'Player starts!' : 'Computer starts!');
    initGame();
    if (randomStart === 1) {
        computerPlay();
    }
});

let playerGameboard;
let computerGameboard;
let player;
let computer;
let turnCounter = 0;

function renderBoard(board, containerId, isPlayer) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    board.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            cellElement.classList.add(isPlayer ? 'player-cell' : 'computer-cell');
            cellElement.dataset.row = rowIndex;
            cellElement.dataset.col = colIndex;
            container.appendChild(cellElement);
        });
    });
}

function computerPlay() {
    const computerTurnResult = computer.takeTurn(playerGameboard);
    console.log('Computer attacked:', computerTurnResult);
    turnCounter++;
    updateCounters();
    checkGameOver();
}

function initGame() {
    playerGameboard = createGameboard();
    computerGameboard = createGameboard();
    player = createPlayer(playerGameboard);
    computer = createPlayer(computerGameboard, 'intermediate');
    placeShips(playerGameboard);
    placeShips(computerGameboard);
    renderBoard(playerGameboard.board, 'player-board', true);
    renderBoard(computerGameboard.board, 'computer-board', false);
    turnCounter = 0;
    updateCounters();
}

function placeShips(gameboard) {
    const ships = [createShip(5), createShip(4), createShip(3), createShip(3), createShip(2)];
    ships.forEach(ship => {
        let placed = false;
        while (!placed) {
            let row = Math.floor(Math.random() * 10);
            let col = Math.floor(Math.random() * 10);
            let isVertical = Math.random() > 0.5;
            if (gameboard.canPlaceShip(ship, row, col, isVertical)) {
                gameboard.placeShip(ship, row, col, isVertical);
                placed = true;
            }
        }
    });
}

function updateCounters() {
    console.log('Turn:', turnCounter);
}

function checkGameOver() {
    if (playerGameboard.allShipsSunk() || computerGameboard.allShipsSunk()) {
        console.log('Game Over');
        // Implement additional actions when the game ends.
    }
}

function playerClick(e) {
    const cell = e.target;
    if (cell.classList.contains('cell') && !cell.classList.contains('cell-attacked')) {
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        const result = playerGameboard.receiveAttack(row, col);
        cell.classList.add('cell-attacked');
        if (result) {
            console.log('Player attacked:', { row, col, result });
            checkGameOver();
        } else {
            // Implement additional actions in case the player misses the attack.
        }
        setTimeout(computerPlay, 500);
    }
}

document.getElementById('player-board').addEventListener('click', playerClick);

initGame();
