/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domElements.js":
/*!****************************!*\
  !*** ./src/domElements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDomElements)
/* harmony export */ });
// Get the Actual DOM elements
var board = document.getElementById('player1');
var board2 = document.getElementById('player2');
var playerAction = document.getElementById('playerAction');
var enemyAction = document.getElementById('enemyAction');
var placingShip = document.getElementById('placingShip');
var alert = document.getElementById('alert');
var enemyStatusTag = document.getElementById('status').querySelector('span');

// Get the DOM elements from the player cards
var player1Card = document.getElementById('player1Card');
// Aircrafcarrier
var player1Aircraftcarrier = player1Card.querySelector('#aircraftcarrier');
var player1AircraftcarrierQuantity = player1Aircraftcarrier.querySelector('#quantity');
// Battleship
var player1Battleship = player1Card.querySelector('#battleship');
var player1BattleshipQuantity = player1Battleship.querySelector('#quantity');
// Submarine
var player1Submarine = player1Card.querySelector('#submarine');
var player1SubmarineQuantity = player1Submarine.querySelector('#quantity');
// cruiser
var player1Cruiser = player1Card.querySelector('#cruiser');
var player1CruiserQuantity = player1Cruiser.querySelector('#quantity');
// Destroyer
var player1Destroyer = player1Card.querySelector('#destroyer');
var player1DestroyerQuantity = player1Destroyer.querySelector('#quantity');
// patrol ship
var player1Boat = player1Card.querySelector('#boat');
var player1BoatQuantity = player1Boat.querySelector('#quantity');

// Get the DOM elements from the computer cards
var player2Card = document.getElementById('player2Card');
// Aircraftcarrier
var player2Aircraftcarrier = player2Card.querySelector('#aircraftcarrier');
var player2AircraftcarrierQuantity = player2Aircraftcarrier.querySelector('#quantity');
// Battleship
var player2Battleship = player2Card.querySelector('#battleship');
var player2BattleshipQuantity = player2Battleship.querySelector('#quantity');
// Submarine
var player2Submarine = player2Card.querySelector('#submarine');
var player2SubmarineQuantity = player2Submarine.querySelector('#quantity');
// cruiser
var player2Cruiser = player2Card.querySelector('#cruiser');
var player2CruiserQuantity = player2Cruiser.querySelector('#quantity');
// Destroyer
var player2Destroyer = player2Card.querySelector('#destroyer');
var player2DestroyerQuantity = player2Destroyer.querySelector('#quantity');
// boat ship
var player2Boat = player2Card.querySelector('#boat');
var player2BoatQuantity = player2Boat.querySelector('#quantity');
function getDomElements() {
  return {
    board: board,
    board2: board2,
    playerAction: playerAction,
    enemyAction: enemyAction,
    placingShip: placingShip,
    alert: alert,
    enemyStatusTag: enemyStatusTag,
    player1Card: player1Card,
    player1Aircraftcarrier: player1Aircraftcarrier,
    player1AircraftcarrierQuantity: player1AircraftcarrierQuantity,
    player1Battleship: player1Battleship,
    player1BattleshipQuantity: player1BattleshipQuantity,
    player1Submarine: player1Submarine,
    player1SubmarineQuantity: player1SubmarineQuantity,
    player1Cruiser: player1Cruiser,
    player1CruiserQuantity: player1CruiserQuantity,
    player1Destroyer: player1Destroyer,
    player1DestroyerQuantity: player1DestroyerQuantity,
    player1Boat: player1Boat,
    player1BoatQuantity: player1BoatQuantity,
    player2Card: player2Card,
    player2Aircraftcarrier: player2Aircraftcarrier,
    player2AircraftcarrierQuantity: player2AircraftcarrierQuantity,
    player2Battleship: player2Battleship,
    player2BattleshipQuantity: player2BattleshipQuantity,
    player2Submarine: player2Submarine,
    player2SubmarineQuantity: player2SubmarineQuantity,
    player2Cruiser: player2Cruiser,
    player2CruiserQuantity: player2CruiserQuantity,
    player2Destroyer: player2Destroyer,
    player2DestroyerQuantity: player2DestroyerQuantity,
    player2Boat: player2Boat,
    player2BoatQuantity: player2BoatQuantity
  };
}

/***/ }),

/***/ "./src/domManager.js":
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAlert: () => (/* binding */ createAlert),
/* harmony export */   drawGrid: () => (/* binding */ drawGrid),
/* harmony export */   showAction: () => (/* binding */ showAction),
/* harmony export */   startPlacing: () => (/* binding */ startPlacing),
/* harmony export */   updatePlacingShip: () => (/* binding */ updatePlacingShip)
/* harmony export */ });
/* harmony import */ var _ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships.js */ "./src/ships.js");
/* harmony import */ var _domElements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements.js */ "./src/domElements.js");
/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboardFactory.js */ "./src/gameboardFactory.js");



function createAlert(type, message) {
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().alert.innerHTML = "\n    <div class=\"container\">\n      <div class=\"notification is-".concat(type, "\">\n        <button class=\"delete\"></button>\n        <p class=\"has-text-weight-bold\">").concat(message, "</p>\n      </div>\n    </div>\n  ");
  var button = (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().alert.querySelector('button');
  button.addEventListener('click', function () {
    button.removeEventListener('click', function () {});
    (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().alert.innerHTML = '';
  });
}
function drawGrid() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'player';
  var board = type === 'enemy' ? (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board2 : (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board;
  board.innerHTML = '';
  for (var i = 0; i < 100; i += 1) {
    var cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
    // assign the id to each cell
    cell.setAttribute('id', 'P1');
    // assign the coordinates to each cell
    cell.setAttribute('data-x', i % 10);
    cell.setAttribute('data-y', Math.floor(i / 10));

    // delete any event listener
    cell.removeEventListener('click', function () {});
    cell.removeEventListener('mouseenter', function () {});
    cell.removeEventListener('mouseleave', function () {});
  }
}
function updateGrid() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'player';
  var board = arguments.length > 1 ? arguments[1] : undefined;
  var domBoard = type === 'enemy' ? (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board2 : (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board;
  var ships = board.ships;
  var missedAttacks = board.missedAttacks;
  if (type === 'player') {
    // show the ships
    ships.forEach(function (ship) {
      for (var i = 0; i < ship.length; i += 1) {
        var cell = domBoard.querySelector("[data-x=\"".concat(ship.coordinates[i][0], "\"][data-y=\"").concat(ship.coordinates[i][1], "\"]"));
        cell.classList.add('ship');
        var images = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.getAllShipImages)(ship.name);
        cell.style.backgroundImage = "url(".concat(images[i], ")");
      }
    });
  }

  // update the missed attacks
  missedAttacks.forEach(function (coord) {
    var cell = domBoard.querySelector("[data-x=\"".concat(coord[0], "\"][data-y=\"").concat(coord[1], "\"]"));
    cell.classList.add('has-background-danger');
  });

  // update the hit attacks
  ships.forEach(function (ship) {
    ship.hits.forEach(function (coord) {
      var cell = domBoard.querySelector("[data-x=\"".concat(coord[0], "\"][data-y=\"").concat(coord[1], "\"]"));
      cell.classList.add('has-background-success');
      if (type === 'enemy') {
        cell.style.backgroundImage = "url(".concat((0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.getExplosionImage)(), ")");
      }
      // if ship is sunk so add the full image
      if (ship.isSunk()) {
        cell.classList.remove('has-background-success');
        cell.classList.add('has-background-success-dark');
        var images = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.getAllShipImages)(ship.name);
        var actualShipPart = ship.coordinates.findIndex(function (shipCoord) {
          return shipCoord[0] === coord[0] && shipCoord[1] === coord[1];
        });
        cell.style.backgroundImage = "url(".concat(images[actualShipPart], ")");
        // rotate to the correct orientation
        var actualOrientation = function actualOrientation() {
          if (ship.coordinates[0][0] === ship.coordinates[1][0]) {
            return 'vertical';
          }
          return 'horizontal';
        };
        if (actualOrientation() === 'vertical') {
          cell.style.transform = 'rotate(90deg)';
        }
      }
    });
  });
}
function updateCard(board) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Player';
  var aircraftcarrier = board.ships.filter(function (ship) {
    return ship.name === 'Aircraftcarrier';
  });
  var battleship = board.ships.filter(function (ship) {
    return ship.name === 'Battleship';
  });
  var cruiser = board.ships.filter(function (ship) {
    return ship.name === 'Cruiser';
  });
  var submarine = board.ships.filter(function (ship) {
    return ship.name === 'Submarine';
  });
  var destroyer = board.ships.filter(function (ship) {
    return ship.name === 'Destroyer';
  });
  var boat = board.ships.filter(function (ship) {
    return ship.name === 'Boat';
  });
  var ships = [];
  if (type === 'Player') {
    ships = [[aircraftcarrier, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1AircraftcarrierQuantity], [battleship, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1BattleshipQuantity], [cruiser, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1CruiserQuantity], [submarine, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1SubmarineQuantity], [destroyer, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1DestroyerQuantity], [boat, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player1BoatQuantity]];
  } else {
    ships = [[aircraftcarrier, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2AircraftcarrierQuantity], [battleship, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2BattleshipQuantity], [cruiser, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2CruiserQuantity], [submarine, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2SubmarineQuantity], [destroyer, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2DestroyerQuantity], [boat, (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().player2BoatQuantity]];
  }
  for (var i = 0; i < ships.length; i += 1) {
    if (ships[i][0].length === 0) {
      ships[i][1].innerHTML = '0';
      ships[i][1].classList.remove('has-text-success');
      ships[i][1].classList.add('has-text-danger');
    } else {
      var sunked = ships[i][0][0].isSunk();
      if (sunked) {
        ships[i][1].innerHTML = '0';
        ships[i][1].classList.remove('has-text-success');
        ships[i][1].classList.add('has-text-danger');
      } else {
        ships[i][1].innerHTML = '1';
        ships[i][1].classList.remove('has-text-danger');
        ships[i][1].classList.add('has-text-success');
      }
    }
  }
}
function updatePlacingShip(shipName) {
  if (shipName === 'none') {
    (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().placingShip.classList.add('is-hidden');
    return;
  }
  var ship = _ships_js__WEBPACK_IMPORTED_MODULE_0__.ships.find(function (ship) {
    return ship.name === shipName;
  });
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().placingShip.classList.remove('is-hidden');
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().placingShip.innerHTML = "\n    <img src=\"".concat(ship.fullImage, "\" alt=\"").concat(shipName, "\" width=\"").concat(ship.size * 20, "\">\n  ");
}
function showAction(type, message) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'green';
  if (type === 'player') {
    (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.classList.remove('is-hidden');
    (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.innerHTML = message;
    if (color === 'green') {
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.classList.add('is-success');
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.classList.remove('is-warning');
    } else {
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.classList.add('is-warning');
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.classList.remove('is-success');
    }
  } else if (type === 'enemy') {
    (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.classList.remove('is-hidden');
    (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.innerHTML = message;
    if (color === 'green') {
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.classList.add('is-success');
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.classList.remove('is-warning');
    } else {
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.classList.add('is-warning');
      (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.classList.remove('is-success');
    }
  }
}
function checkValidMove(board, cell, orientation, shipLength, shipName) {
  var x = parseInt(cell.getAttribute('data-x'), 10);
  var y = parseInt(cell.getAttribute('data-y'), 10);
  var coords = [x, y];
  try {
    (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_2__.boardValidation)(shipName, shipLength, coords, orientation, board.ships);
  } catch (e) {
    return false;
  }
  return true;
}
function setShipImage(board, cell, shipImages, orientation, shipLength, shipName) {
  var x = parseInt(cell.getAttribute('data-x'), 10);
  var y = parseInt(cell.getAttribute('data-y'), 10);
  var validMove = checkValidMove(board, cell, orientation, shipLength, shipName);
  for (var i = 0; i < shipLength; i += 1) {
    var cellToChange = orientation === 'horizontal' ? document.querySelector("#P1[data-x=\"".concat(x + i, "\"][data-y=\"").concat(y, "\"]")) : document.querySelector("#P1[data-x=\"".concat(x, "\"][data-y=\"").concat(y + i, "\"]"));
    if (cellToChange) {
      if (validMove) {
        cellToChange.style.transform = orientation === 'horizontal' ? 'rotate(0deg)' : 'rotate(90deg)';
        cellToChange.style.backgroundImage = "url(".concat(shipImages[i], ")");
        cellToChange.classList.add('has-background-success');
      } else {
        cellToChange.classList.add('has-background-danger');
      }
    }
  }
}
function removeShipImage(cell, orientation, shipLength) {
  var x = parseInt(cell.getAttribute('data-x'), 10);
  var y = parseInt(cell.getAttribute('data-y'), 10);
  for (var i = 0; i < shipLength; i += 1) {
    var cellToChange = orientation === 'horizontal' ? document.querySelector("#P1[data-x=\"".concat(x + i, "\"][data-y=\"").concat(y, "\"]")) : document.querySelector("#P1[data-x=\"".concat(x, "\"][data-y=\"").concat(y + i, "\"]"));
    if (cellToChange) {
      if (!cellToChange.classList.contains('ship')) {
        cellToChange.style.backgroundImage = '';
      }
      cellToChange.classList.remove('has-background-success');
      cellToChange.classList.remove('has-background-danger');
    }
  }
}
function tryPlaceShip(cell, orientation, shipName, shipLength, board) {
  var x = parseInt(cell.getAttribute('data-x'), 10);
  var y = parseInt(cell.getAttribute('data-y'), 10);
  var validMove = checkValidMove(board, cell, orientation, shipLength, shipName);
  if (validMove) {
    board.placeShip(shipName, shipLength, [x, y], orientation);
    updateCard(board);
    updateGrid('player', board);
    return true;
  }
  return false;
}
function stopPlacing() {
  var cells = (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board.querySelectorAll('.cell');
  cells.forEach(function (cell) {
    if (!cell.classList.contains('ship')) {
      cell.style.backgroundImage = '';
    }
    cell.classList.remove('has-background-success');
    cell.classList.remove('has-background-danger');
    cell.replaceWith(cell.cloneNode(true));
  });
}
function createResetButton() {
  var resetButton = document.createElement('button');
  resetButton.classList.add('button', 'is-danger', 'is-large', 'is-fullwidth');
  resetButton.innerHTML = 'Reset Game';
  resetButton.addEventListener('click', function () {
    window.location.reload();
  });
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().alert.appendChild(resetButton);
}
function endGame(winner) {
  createAlert('success', "".concat(winner));
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board.classList.add('is-hidden');
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board2.classList.add('is-hidden');
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().placingShip.classList.add('is-hidden');
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().playerAction.classList.add('is-hidden');
  (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().enemyAction.classList.add('is-hidden');
  createResetButton();
}
function startAttacking(gameInstance) {
  var cells = (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board2.querySelectorAll('.cell');
  cells.forEach(function (cell) {
    if (!cell.classList.contains('hit') && !cell.classList.contains('miss')) {
      cell.addEventListener('click', function () {
        var x = parseInt(cell.getAttribute('data-x'), 10);
        var y = parseInt(cell.getAttribute('data-y'), 10);
        try {
          var attack = gameInstance.playerAttack(x, y);
          if (attack === 'hit') {
            cell.classList.add('hit');
            createAlert('success', 'You hit a ship!, keep going!');
          } else if (attack === 'doubleMiss') {
            cell.classList.add('miss');
            createAlert('none', 'You missed! also the computer missed!');
          } else if (attack === 'missAndHit') {
            cell.classList.add('miss');
            createAlert('danger', 'You missed! the computer hit a ship!');
          }
          updateGrid('enemy', gameInstance.computerBoard);
          updateGrid('player', gameInstance.playerBoard);
          updateCard(gameInstance.computerBoard, 'enemy');
          updateCard(gameInstance.playerBoard);
          if (gameInstance.gameEnd()) {
            endGame(gameInstance.gameEnd());
            gameInstance.resetGame();
          }
        } catch (e) {
          createAlert('warning', e.message);
        }
      });
    }
    cell.addEventListener('mouseenter', function () {});
    cell.addEventListener('mouseleave', function () {});
  });
}
var placing = true;
function startPlacing(gameInstance, orientation, shipName) {
  updateCard(gameInstance.computerBoard, 'enemy');
  var cells = (0,_domElements_js__WEBPACK_IMPORTED_MODULE_1__["default"])().board.querySelectorAll('.cell');
  var shipImages = (0,_ships_js__WEBPACK_IMPORTED_MODULE_0__.getAllShipImages)(shipName);
  var shipLength = shipImages.length;
  var shipTypes = ['Aircraftcarrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer', 'Boat'];
  var nextShip = shipTypes.indexOf(shipName) + 1;
  document.addEventListener('keydown', function (e) {
    if (e.key === 'r' && placing) {
      stopPlacing();
      startPlacing(gameInstance, orientation === 'horizontal' ? 'vertical' : 'horizontal', shipName);
    }
  });
  cells.forEach(function (cell) {
    cell.addEventListener('mouseenter', function () {
      return setShipImage(gameInstance.playerBoard, cell, shipImages, orientation, shipLength, shipName);
    });
    cell.addEventListener('mouseleave', function () {
      return removeShipImage(cell, orientation, shipLength);
    });
    cell.addEventListener('click', function () {
      var placed = tryPlaceShip(cell, orientation, shipName, shipLength, gameInstance.playerBoard);
      if (placed) {
        stopPlacing();
        if (nextShip < shipTypes.length) {
          updatePlacingShip(shipTypes[nextShip]);
          startPlacing(gameInstance, 'horizontal', shipTypes[nextShip]);
        } else {
          placing = false;
          updatePlacingShip('none');
          createAlert('success', 'All ships placed, placing computer ships');
          showAction('player', 'Waiting for computer', 'alert');
          showAction('enemy', 'Placing ships');
          // wait 3 second before placing computer ships (simulates thinking)
          setTimeout(function () {
            gameInstance.randomPlaceShips(gameInstance.computerBoard);
            updateCard(gameInstance.computerBoard, 'enemy');
            gameInstance.startGame();
            createAlert('success', 'All ships placed, Attack!');
            showAction('player', 'Attack the enemy!');
            showAction('enemy', 'Waiting for attack', 'alert');
            startAttacking(gameInstance);
          }, 3000);
        }
      }
    });
  });
}

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory.js */ "./src/gameboardFactory.js");
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory.js */ "./src/shipFactory.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var game = {
    actualPlayer: 1,
    gameStarted: false,
    playerBoard: (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)(),
    computerBoard: (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)(),
    changePlayer: function changePlayer() {
      this.actualPlayer = this.actualPlayer === 1 ? 2 : 1;
    },
    randomPlaceShips: function randomPlaceShips(board) {
      var ships = [{
        name: 'Aircraftcarrier',
        value: (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"])(5)
      }, {
        name: 'Battleship',
        value: (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"])(4)
      }, {
        name: 'Cruiser',
        value: (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"])(3)
      }, {
        name: 'Submarine',
        value: (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2)
      }, {
        name: 'Destroyer',
        value: (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2)
      }, {
        name: 'Boat',
        value: (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_1__["default"])(2)
      }];
      ships.forEach(function (ship) {
        var coordinates = [];
        var orientation = '';
        var validShip = false;
        while (!validShip) {
          coordinates = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
          orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
          try {
            board.placeShip(ship.name, ship.value.length, coordinates, orientation);
            validShip = true;
          } catch (error) {
            validShip = false;
          }
        }
      });
    },
    startGame: function startGame() {
      if (this.playerBoard.ships.length >= 6 && this.computerBoard.ships.length >= 6) {
        this.gameStarted = true;
      } else {
        throw new Error('Place all your ships');
      }
    },
    checkValidAttack: function checkValidAttack(x, y) {
      var coords = [x, y];
      if (!this.gameStarted) {
        throw new Error('You need to start the game');
      }
      if (x < 0 || x > 9 || y < 0 || y > 9) {
        throw new Error('Coordinates are not valid');
      }
      var misses = this.computerBoard.missedAttacks;
      var missed = misses.some(function (miss) {
        return miss[0] === coords[0] && miss[1] === coords[1];
      });
      var hits = this.computerBoard.ships.map(function (ship) {
        return ship.hits;
      });
      var hitted = hits.some(function (hit) {
        return hit.some(function (hitCoords) {
          return hitCoords[0] === coords[0] && hitCoords[1] === coords[1];
        });
      });
      if (missed || hitted) {
        throw new Error('You already attacked this coordinates');
      }
      return true;
    },
    playerAttack: function playerAttack(x, y) {
      if (this.checkValidAttack(x, y)) {
        this.computerBoard.receiveAttack([x, y]);
        if (this.computerBoard.ships.some(function (ship) {
          return ship.hits.some(function (hit) {
            return hit[0] === x && hit[1] === y;
          });
        })) {
          return 'hit';
        }
        this.changePlayer();
        var cpuAttack = this.computerAttack();
        this.changePlayer();
        if (cpuAttack === 'miss') {
          return 'doubleMiss';
        }
      }
      return 'missAndHit';
    },
    computerAttack: function computerAttack() {
      var hits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!this.gameStarted) {
        throw new Error('You need to start the game');
      }
      var coordinates = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
      if (this.playerBoard.missedAttacks.some(function (missedAttack) {
        return missedAttack[0] === coordinates[0] && missedAttack[1] === coordinates[1];
      })) {
        this.computerAttack();
      } else {
        this.playerBoard.receiveAttack(coordinates);
        if (this.playerBoard.ships.some(function (ship) {
          return ship.hits.some(function (hit) {
            return hit[0] === coordinates[0] && hit[1] === coordinates[1];
          });
        })) {
          this.computerAttack(hits + 1);
          return 'hit';
        }
        this.changePlayer();
      }
      if (hits === 0) {
        return 'miss';
      }
      return hits;
    },
    gameEnd: function gameEnd() {
      if (!this.gameStarted) {
        throw new Error('You need to start the game');
      }
      if (this.playerBoard.allShipsSunk()) {
        return 'Computer wins';
      }
      if (this.computerBoard.allShipsSunk()) {
        return 'Player wins';
      }
      return false;
    },
    resetGame: function resetGame() {
      this.actualPlayer = 1;
      this.gameStarted = false;
      this.playerBoard = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)();
      this.computerBoard = (0,_gameboardFactory_js__WEBPACK_IMPORTED_MODULE_0__.gameboardFactory)();
    }
  };
  return game;
});

/***/ }),

/***/ "./src/gameboardFactory.js":
/*!*********************************!*\
  !*** ./src/gameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   boardValidation: () => (/* binding */ boardValidation),
/* harmony export */   gameboardFactory: () => (/* binding */ gameboardFactory)
/* harmony export */ });
/* harmony import */ var _shipFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory.js */ "./src/shipFactory.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


// function to get the coordinates of a ship
function getShipCoordinates(coordinates, length, orientation) {
  var _coordinates = _slicedToArray(coordinates, 2),
    x = _coordinates[0],
    y = _coordinates[1];
  var shipCoordinates = [];
  for (var i = 0; i < length; i += 1) {
    if (orientation === 'horizontal') {
      shipCoordinates.push([x + i, y]);
    } else if (orientation === 'vertical') {
      shipCoordinates.push([x, y + i]);
    }
  }
  return shipCoordinates;
}

// function to get the ship that was hit
function getHitShip(coordinates, ships) {
  var _coordinates2 = _slicedToArray(coordinates, 2),
    x = _coordinates2[0],
    y = _coordinates2[1];
  var shipHit = null;
  ships.forEach(function (ship) {
    ship.coordinates.forEach(function (shipCoordinate) {
      if (shipCoordinate[0] === x && shipCoordinate[1] === y) {
        shipHit = ship;
      }
    });
  });
  return shipHit;
}
function validateName(name) {
  // Aircraftcarrier, Battleship, Cruiser, Submarine, Destroyer, Boat
  if (name !== 'Aircraftcarrier' && name !== 'Battleship' && name !== 'Cruiser' && name !== 'Submarine' && name !== 'Destroyer' && name !== 'Boat') {
    throw new Error('Ship name must be Aircraftcarrier, Battleship, Cruiser, Submarine, Destroyer or Boat');
  }
}
function validateShipLength(length) {
  if (length < 1 || length > 5) {
    throw new Error('Ship length must be between 1 and 5');
  }
}
function validateOrientation(orientation) {
  if (orientation !== 'horizontal' && orientation !== 'vertical') {
    throw new Error('Ship orientation must be horizontal or vertical');
  }
}
function validateCoordinates(coordinates) {
  if (!Array.isArray(coordinates)) {
    throw new Error('Ship coordinates must be an array');
  }
  if (coordinates.length !== 2) {
    throw new Error('Ship coordinates must be an array of two numbers');
  }
  coordinates.forEach(function (coordinate) {
    if (typeof coordinate !== 'number') {
      throw new Error('Ship coordinates must be an array of two numbers');
    }
    if (coordinate < 0 || coordinate > 9) {
      throw new Error('Ship coordinates must be between 0 and 9');
    }
  });
}
function validateOverlap(coordinates, length, orientation, ships) {
  var shipCoordinates = getShipCoordinates(coordinates, length, orientation);
  ships.forEach(function (ship) {
    shipCoordinates.forEach(function (shipCoordinate) {
      ship.coordinates.forEach(function (shipCoordinate2) {
        if (shipCoordinate[0] === shipCoordinate2[0] && shipCoordinate[1] === shipCoordinate2[1]) {
          throw new Error('Ships cannot overlap');
        }
      });
    });
  });
}
function boardValidation(name, length, coordinates, orientation, ships) {
  validateName(name);
  validateShipLength(length);
  validateOrientation(orientation);
  validateCoordinates(coordinates);
  validateOverlap(coordinates, length, orientation, ships);
  return true;
}

// gameboard factory function
function gameboardFactory() {
  var gameboard = {
    ships: [],
    missedAttacks: [],
    placeShip: function placeShip(name, length, coordinates, orientation) {
      // validate ship
      if (boardValidation(name, length, coordinates, orientation, this.ships) === false) {
        return;
      }

      //create ship function
      var ship = (0,_shipFactory_js__WEBPACK_IMPORTED_MODULE_0__["default"])(length);
      ship.name = name;
      ship.coordinates = getShipCoordinates(coordinates, length, orientation);

      // check if ship is off the board
      var shipOffBoard = ship.coordinates.some(function (shipCoordinate) {
        var _shipCoordinate = _slicedToArray(shipCoordinate, 2),
          x = _shipCoordinate[0],
          y = _shipCoordinate[1];
        return x < 0 || x > 9 || y < 0 || y > 9;
      });
      if (shipOffBoard) {
        throw new Error('Ships cannot be placed off the board');
      }
      this.ships.push(ship);
    },
    receiveAttack: function receiveAttack(coordinates) {
      var shipHit = getHitShip(coordinates, this.ships);
      if (shipHit) {
        shipHit.hit(coordinates);
      } else {
        this.missedAttacks.push(coordinates);
      }
    },
    allShipsSunk: function allShipsSunk() {
      return this.ships.every(function (ship) {
        return ship.isSunk();
      });
    }
  };
  return gameboard;
}

/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createShip)
/* harmony export */ });
function createShip(length) {
  var ship = {
    length: length,
    hits: [],
    hit: function hit(position) {
      this.hits.push(position);
    },
    isSunk: function isSunk() {
      return this.hits.length === this.length;
    }
  };
  return ship;
}

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllShipImages: () => (/* binding */ getAllShipImages),
/* harmony export */   getExplosionImage: () => (/* binding */ getExplosionImage),
/* harmony export */   ships: () => (/* binding */ ships)
/* harmony export */ });
/* harmony import */ var _images_aircraftcarrier_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/aircraftcarrier.png */ "./src/images/aircraftcarrier.png");
/* harmony import */ var _images_aircraftcarrier1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/aircraftcarrier1.png */ "./src/images/aircraftcarrier1.png");
/* harmony import */ var _images_aircraftcarrier2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/aircraftcarrier2.png */ "./src/images/aircraftcarrier2.png");
/* harmony import */ var _images_aircraftcarrier3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/aircraftcarrier3.png */ "./src/images/aircraftcarrier3.png");
/* harmony import */ var _images_aircraftcarrier4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/aircraftcarrier4.png */ "./src/images/aircraftcarrier4.png");
/* harmony import */ var _images_aircraftcarrier5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/aircraftcarrier5.png */ "./src/images/aircraftcarrier5.png");
/* harmony import */ var _images_battleship_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/battleship.png */ "./src/images/battleship.png");
/* harmony import */ var _images_battleship1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/battleship1.png */ "./src/images/battleship1.png");
/* harmony import */ var _images_battleship2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/battleship2.png */ "./src/images/battleship2.png");
/* harmony import */ var _images_battleship3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/battleship3.png */ "./src/images/battleship3.png");
/* harmony import */ var _images_battleship4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/battleship4.png */ "./src/images/battleship4.png");
/* harmony import */ var _images_cruiser_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/cruiser.png */ "./src/images/cruiser.png");
/* harmony import */ var _images_cruiser1_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/cruiser1.png */ "./src/images/cruiser1.png");
/* harmony import */ var _images_cruiser2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/cruiser2.png */ "./src/images/cruiser2.png");
/* harmony import */ var _images_cruiser3_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/cruiser3.png */ "./src/images/cruiser3.png");
/* harmony import */ var _images_destroyer_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/destroyer.png */ "./src/images/destroyer.png");
/* harmony import */ var _images_destroyer1_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/destroyer1.png */ "./src/images/destroyer1.png");
/* harmony import */ var _images_destroyer2_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/destroyer2.png */ "./src/images/destroyer2.png");
/* harmony import */ var _images_destroyer3_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/destroyer3.png */ "./src/images/destroyer3.png");
/* harmony import */ var _images_submarine_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/submarine.png */ "./src/images/submarine.png");
/* harmony import */ var _images_submarine1_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/submarine1.png */ "./src/images/submarine1.png");
/* harmony import */ var _images_submarine2_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/submarine2.png */ "./src/images/submarine2.png");
/* harmony import */ var _images_boat_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/boat.png */ "./src/images/boat.png");
/* harmony import */ var _images_boat1_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/boat1.png */ "./src/images/boat1.png");
/* harmony import */ var _images_boat2_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./images/boat2.png */ "./src/images/boat2.png");
/* harmony import */ var _images_explosion_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./images/explosion.png */ "./src/images/explosion.png");


























var aircraftcarrierShip = {
  name: 'Aircraftcarrier',
  size: 5,
  fullImage: _images_aircraftcarrier_png__WEBPACK_IMPORTED_MODULE_0__,
  images: [_images_aircraftcarrier1_png__WEBPACK_IMPORTED_MODULE_1__, _images_aircraftcarrier2_png__WEBPACK_IMPORTED_MODULE_2__, _images_aircraftcarrier3_png__WEBPACK_IMPORTED_MODULE_3__, _images_aircraftcarrier4_png__WEBPACK_IMPORTED_MODULE_4__, _images_aircraftcarrier5_png__WEBPACK_IMPORTED_MODULE_5__]
};
var battleshipShip = {
  name: 'Battleship',
  size: 4,
  fullImage: _images_battleship_png__WEBPACK_IMPORTED_MODULE_6__,
  images: [_images_battleship1_png__WEBPACK_IMPORTED_MODULE_7__, _images_battleship2_png__WEBPACK_IMPORTED_MODULE_8__, _images_battleship3_png__WEBPACK_IMPORTED_MODULE_9__, _images_battleship4_png__WEBPACK_IMPORTED_MODULE_10__]
};
var cruiserShip = {
  name: 'Cruiser',
  size: 3,
  fullImage: _images_cruiser_png__WEBPACK_IMPORTED_MODULE_11__,
  images: [_images_cruiser1_png__WEBPACK_IMPORTED_MODULE_12__, _images_cruiser2_png__WEBPACK_IMPORTED_MODULE_13__, _images_cruiser3_png__WEBPACK_IMPORTED_MODULE_14__]
};
var submarineShip = {
  name: 'Submarine',
  size: 2,
  fullImage: _images_submarine_png__WEBPACK_IMPORTED_MODULE_19__,
  images: [_images_submarine1_png__WEBPACK_IMPORTED_MODULE_20__, _images_submarine2_png__WEBPACK_IMPORTED_MODULE_21__]
};
var destroyerShip = {
  name: 'Destroyer',
  size: 3,
  fullImage: _images_destroyer_png__WEBPACK_IMPORTED_MODULE_15__,
  images: [_images_destroyer1_png__WEBPACK_IMPORTED_MODULE_16__, _images_destroyer2_png__WEBPACK_IMPORTED_MODULE_17__, _images_destroyer3_png__WEBPACK_IMPORTED_MODULE_18__]
};
var boatShip = {
  name: 'Boat',
  size: 2,
  fullImage: _images_boat_png__WEBPACK_IMPORTED_MODULE_22__,
  images: [_images_boat1_png__WEBPACK_IMPORTED_MODULE_23__, _images_boat2_png__WEBPACK_IMPORTED_MODULE_24__]
};
var ships = [aircraftcarrierShip, battleshipShip, cruiserShip, submarineShip, destroyerShip, boatShip];
function getAllShipImages(shipName) {
  var ship = ships.find(function (ship) {
    return ship.name === shipName;
  });
  return ship.images;
}
function getExplosionImage() {
  return _images_explosion_png__WEBPACK_IMPORTED_MODULE_25__;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/backgroundbatleships.png */ "./src/images/backgroundbatleships.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.board {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
}

.cell {
  background-size: contain;
  background-color: rgb(255 255 255 / 63%);
  border: 1px solid rgb(255, 255, 255);
  height: 0;
  padding-bottom: 100%;
  width: 100%;
}

.cell.has-background-danger {
  background-color: rgba(255, 0, 0, 0.63) !important;
}

.cell.has-background-success {
  background-color: rgba(30, 255, 0, 0.63) !important;
}

.cell:hover {
  background-color: rgb(215, 215, 215, 0.5);
  cursor: pointer;
}

.is-fullheight {
  min-height: 100vh;
}

.tittle-tag > span {
  font-family: monospace;
  width: 135px;
}

.has-ocean {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,wBAAwB;EACxB,wCAAwC;EACxC,oCAAoC;EACpC,SAAS;EACT,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,kDAAkD;AACpD;;AAEA;EACE,mDAAmD;AACrD;;AAEA;EACE,yCAAyC;EACzC,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,yDAAwD;AAC1D","sourcesContent":[".board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.cell {\n  background-size: contain;\n  background-color: rgb(255 255 255 / 63%);\n  border: 1px solid rgb(255, 255, 255);\n  height: 0;\n  padding-bottom: 100%;\n  width: 100%;\n}\n\n.cell.has-background-danger {\n  background-color: rgba(255, 0, 0, 0.63) !important;\n}\n\n.cell.has-background-success {\n  background-color: rgba(30, 255, 0, 0.63) !important;\n}\n\n.cell:hover {\n  background-color: rgb(215, 215, 215, 0.5);\n  cursor: pointer;\n}\n\n.is-fullheight {\n  min-height: 100vh;\n}\n\n.tittle-tag > span {\n  font-family: monospace;\n  width: 135px;\n}\n\n.has-ocean {\n  background-image: url(./images/backgroundbatleships.png);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/aircraftcarrier.png":
/*!****************************************!*\
  !*** ./src/images/aircraftcarrier.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "42cd323ecd768684ce12.png";

/***/ }),

/***/ "./src/images/aircraftcarrier1.png":
/*!*****************************************!*\
  !*** ./src/images/aircraftcarrier1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4977da941a83831686d0.png";

/***/ }),

/***/ "./src/images/aircraftcarrier2.png":
/*!*****************************************!*\
  !*** ./src/images/aircraftcarrier2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9ae8814436d2ee4c3cf.png";

/***/ }),

/***/ "./src/images/aircraftcarrier3.png":
/*!*****************************************!*\
  !*** ./src/images/aircraftcarrier3.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92dcba906715609095a6.png";

/***/ }),

/***/ "./src/images/aircraftcarrier4.png":
/*!*****************************************!*\
  !*** ./src/images/aircraftcarrier4.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3427a45558aecfa8de1.png";

/***/ }),

/***/ "./src/images/aircraftcarrier5.png":
/*!*****************************************!*\
  !*** ./src/images/aircraftcarrier5.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "401d67367e2a595a77ea.png";

/***/ }),

/***/ "./src/images/backgroundbatleships.png":
/*!*********************************************!*\
  !*** ./src/images/backgroundbatleships.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ff1db63c602fe81d490.png";

/***/ }),

/***/ "./src/images/battleship.png":
/*!***********************************!*\
  !*** ./src/images/battleship.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "43e3cce36f2d411af47d.png";

/***/ }),

/***/ "./src/images/battleship1.png":
/*!************************************!*\
  !*** ./src/images/battleship1.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b54792a581829e50eb6.png";

/***/ }),

/***/ "./src/images/battleship2.png":
/*!************************************!*\
  !*** ./src/images/battleship2.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69bbe0fe3f8d3009c24e.png";

/***/ }),

/***/ "./src/images/battleship3.png":
/*!************************************!*\
  !*** ./src/images/battleship3.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a4f57a725937bb9a079.png";

/***/ }),

/***/ "./src/images/battleship4.png":
/*!************************************!*\
  !*** ./src/images/battleship4.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca1509dda9231f941bf4.png";

/***/ }),

/***/ "./src/images/boat.png":
/*!*****************************!*\
  !*** ./src/images/boat.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a75e8f0674640ef527d.png";

/***/ }),

/***/ "./src/images/boat1.png":
/*!******************************!*\
  !*** ./src/images/boat1.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d4bb527c0d06f8f2c25.png";

/***/ }),

/***/ "./src/images/boat2.png":
/*!******************************!*\
  !*** ./src/images/boat2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76415aaa60c1460be853.png";

/***/ }),

/***/ "./src/images/cruiser.png":
/*!********************************!*\
  !*** ./src/images/cruiser.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb6771fa0ce9c671fb19.png";

/***/ }),

/***/ "./src/images/cruiser1.png":
/*!*********************************!*\
  !*** ./src/images/cruiser1.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "022d210da155be93d38f.png";

/***/ }),

/***/ "./src/images/cruiser2.png":
/*!*********************************!*\
  !*** ./src/images/cruiser2.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55cd9d73cb74af59c47f.png";

/***/ }),

/***/ "./src/images/cruiser3.png":
/*!*********************************!*\
  !*** ./src/images/cruiser3.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca433ab07317158962e5.png";

/***/ }),

/***/ "./src/images/destroyer.png":
/*!**********************************!*\
  !*** ./src/images/destroyer.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d96461c1d77b9c5c2033.png";

/***/ }),

/***/ "./src/images/destroyer1.png":
/*!***********************************!*\
  !*** ./src/images/destroyer1.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "022d210da155be93d38f.png";

/***/ }),

/***/ "./src/images/destroyer2.png":
/*!***********************************!*\
  !*** ./src/images/destroyer2.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55cd9d73cb74af59c47f.png";

/***/ }),

/***/ "./src/images/destroyer3.png":
/*!***********************************!*\
  !*** ./src/images/destroyer3.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca433ab07317158962e5.png";

/***/ }),

/***/ "./src/images/explosion.png":
/*!**********************************!*\
  !*** ./src/images/explosion.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "12ea9e6c44069a2e2b41.png";

/***/ }),

/***/ "./src/images/submarine.png":
/*!**********************************!*\
  !*** ./src/images/submarine.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37abf0dba8a364dfaa31.png";

/***/ }),

/***/ "./src/images/submarine1.png":
/*!***********************************!*\
  !*** ./src/images/submarine1.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4339db7e1e7adbe146c.png";

/***/ }),

/***/ "./src/images/submarine2.png":
/*!***********************************!*\
  !*** ./src/images/submarine2.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eefe2ed8b16fa80a5384.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManager.js */ "./src/domManager.js");
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ "./src/game.js");



var gameInstance = (0,_game_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

// draw the boards
(0,_domManager_js__WEBPACK_IMPORTED_MODULE_1__.drawGrid)();
(0,_domManager_js__WEBPACK_IMPORTED_MODULE_1__.drawGrid)('enemy');

// Show action to the player
(0,_domManager_js__WEBPACK_IMPORTED_MODULE_1__.showAction)('player', 'Place your ships');
(0,_domManager_js__WEBPACK_IMPORTED_MODULE_1__.showAction)('enemy', 'Waiting For Ships', 'alert');
(0,_domManager_js__WEBPACK_IMPORTED_MODULE_1__.updatePlacingShip)('Aircraftcarrier');

// Show the alert
(0,_domManager_js__WEBPACK_IMPORTED_MODULE_1__.createAlert)('success', 'Game started, place your ships (Press R to rotate)');
(0,_domManager_js__WEBPACK_IMPORTED_MODULE_1__.startPlacing)(gameInstance, 'horizontal', 'Aircraftcarrier');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBT0k7QUFDSTtBQUU3QixJQUFNcEYsWUFBWSxHQUFHbUIsb0RBQUksQ0FBQyxDQUFDOztBQUUzQjtBQUNBakcsd0RBQVEsQ0FBQyxDQUFDO0FBQ1ZBLHdEQUFRLENBQUMsT0FBTyxDQUFDOztBQUVqQjtBQUNBOEMsMERBQVUsQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUM7QUFDeENBLDBEQUFVLENBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE9BQU8sQ0FBQztBQUVqREwsaUVBQWlCLENBQUMsaUJBQWlCLENBQUM7O0FBRXBDO0FBQ0FqRCwyREFBVyxDQUFDLFNBQVMsRUFBRSxvREFBb0QsQ0FBQztBQUU1RThGLDREQUFZLENBQUNSLFlBQVksRUFBRSxZQUFZLEVBQUUsaUJBQWlCLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2RvbUVsZW1lbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2RvbU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9nYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEdldCB0aGUgQWN0dWFsIERPTSBlbGVtZW50c1xuY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMScpO1xuY29uc3QgYm9hcmQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjInKTtcbmNvbnN0IHBsYXllckFjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJBY3Rpb24nKTtcbmNvbnN0IGVuZW15QWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VuZW15QWN0aW9uJyk7XG5jb25zdCBwbGFjaW5nU2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGFjaW5nU2hpcCcpO1xuY29uc3QgYWxlcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxlcnQnKTtcbmNvbnN0IGVuZW15U3RhdHVzVGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXR1cycpLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcblxuLy8gR2V0IHRoZSBET00gZWxlbWVudHMgZnJvbSB0aGUgcGxheWVyIGNhcmRzXG5jb25zdCBwbGF5ZXIxQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIxQ2FyZCcpO1xuLy8gQWlyY3JhZmNhcnJpZXJcbmNvbnN0IHBsYXllcjFBaXJjcmFmdGNhcnJpZXIgPSBwbGF5ZXIxQ2FyZC5xdWVyeVNlbGVjdG9yKCcjYWlyY3JhZnRjYXJyaWVyJyk7XG5jb25zdCBwbGF5ZXIxQWlyY3JhZnRjYXJyaWVyUXVhbnRpdHkgPSBwbGF5ZXIxQWlyY3JhZnRjYXJyaWVyLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gQmF0dGxlc2hpcFxuY29uc3QgcGxheWVyMUJhdHRsZXNoaXAgPSBwbGF5ZXIxQ2FyZC5xdWVyeVNlbGVjdG9yKCcjYmF0dGxlc2hpcCcpO1xuY29uc3QgcGxheWVyMUJhdHRsZXNoaXBRdWFudGl0eSA9IHBsYXllcjFCYXR0bGVzaGlwLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gU3VibWFyaW5lXG5jb25zdCBwbGF5ZXIxU3VibWFyaW5lID0gcGxheWVyMUNhcmQucXVlcnlTZWxlY3RvcignI3N1Ym1hcmluZScpO1xuY29uc3QgcGxheWVyMVN1Ym1hcmluZVF1YW50aXR5ID0gcGxheWVyMVN1Ym1hcmluZS5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcbi8vIGNydWlzZXJcbmNvbnN0IHBsYXllcjFDcnVpc2VyID0gcGxheWVyMUNhcmQucXVlcnlTZWxlY3RvcignI2NydWlzZXInKTtcbmNvbnN0IHBsYXllcjFDcnVpc2VyUXVhbnRpdHkgPSBwbGF5ZXIxQ3J1aXNlci5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcbi8vIERlc3Ryb3llclxuY29uc3QgcGxheWVyMURlc3Ryb3llciA9IHBsYXllcjFDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNkZXN0cm95ZXInKTtcbmNvbnN0IHBsYXllcjFEZXN0cm95ZXJRdWFudGl0eSA9IHBsYXllcjFEZXN0cm95ZXIucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBwYXRyb2wgc2hpcFxuY29uc3QgcGxheWVyMUJvYXQgPSBwbGF5ZXIxQ2FyZC5xdWVyeVNlbGVjdG9yKCcjYm9hdCcpO1xuY29uc3QgcGxheWVyMUJvYXRRdWFudGl0eSA9IHBsYXllcjFCb2F0LnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuXG4vLyBHZXQgdGhlIERPTSBlbGVtZW50cyBmcm9tIHRoZSBjb21wdXRlciBjYXJkc1xuY29uc3QgcGxheWVyMkNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMkNhcmQnKTtcbi8vIEFpcmNyYWZ0Y2FycmllclxuY29uc3QgcGxheWVyMkFpcmNyYWZ0Y2FycmllciA9IHBsYXllcjJDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNhaXJjcmFmdGNhcnJpZXInKTtcbmNvbnN0IHBsYXllcjJBaXJjcmFmdGNhcnJpZXJRdWFudGl0eSA9IHBsYXllcjJBaXJjcmFmdGNhcnJpZXIucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBCYXR0bGVzaGlwXG5jb25zdCBwbGF5ZXIyQmF0dGxlc2hpcCA9IHBsYXllcjJDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNiYXR0bGVzaGlwJyk7XG5jb25zdCBwbGF5ZXIyQmF0dGxlc2hpcFF1YW50aXR5ID0gcGxheWVyMkJhdHRsZXNoaXAucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBTdWJtYXJpbmVcbmNvbnN0IHBsYXllcjJTdWJtYXJpbmUgPSBwbGF5ZXIyQ2FyZC5xdWVyeVNlbGVjdG9yKCcjc3VibWFyaW5lJyk7XG5jb25zdCBwbGF5ZXIyU3VibWFyaW5lUXVhbnRpdHkgPSBwbGF5ZXIyU3VibWFyaW5lLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gY3J1aXNlclxuY29uc3QgcGxheWVyMkNydWlzZXIgPSBwbGF5ZXIyQ2FyZC5xdWVyeVNlbGVjdG9yKCcjY3J1aXNlcicpO1xuY29uc3QgcGxheWVyMkNydWlzZXJRdWFudGl0eSA9IHBsYXllcjJDcnVpc2VyLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gRGVzdHJveWVyXG5jb25zdCBwbGF5ZXIyRGVzdHJveWVyID0gcGxheWVyMkNhcmQucXVlcnlTZWxlY3RvcignI2Rlc3Ryb3llcicpO1xuY29uc3QgcGxheWVyMkRlc3Ryb3llclF1YW50aXR5ID0gcGxheWVyMkRlc3Ryb3llci5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcbi8vIGJvYXQgc2hpcFxuY29uc3QgcGxheWVyMkJvYXQgPSBwbGF5ZXIyQ2FyZC5xdWVyeVNlbGVjdG9yKCcjYm9hdCcpO1xuY29uc3QgcGxheWVyMkJvYXRRdWFudGl0eSA9IHBsYXllcjJCb2F0LnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREb21FbGVtZW50cygpIHtcbiAgcmV0dXJuIHtcbiAgICBib2FyZCxcbiAgICBib2FyZDIsXG4gICAgcGxheWVyQWN0aW9uLFxuICAgIGVuZW15QWN0aW9uLFxuICAgIHBsYWNpbmdTaGlwLFxuICAgIGFsZXJ0LFxuICAgIGVuZW15U3RhdHVzVGFnLFxuICAgIHBsYXllcjFDYXJkLFxuICAgIHBsYXllcjFBaXJjcmFmdGNhcnJpZXIsXG4gICAgcGxheWVyMUFpcmNyYWZ0Y2FycmllclF1YW50aXR5LFxuICAgIHBsYXllcjFCYXR0bGVzaGlwLFxuICAgIHBsYXllcjFCYXR0bGVzaGlwUXVhbnRpdHksXG4gICAgcGxheWVyMVN1Ym1hcmluZSxcbiAgICBwbGF5ZXIxU3VibWFyaW5lUXVhbnRpdHksXG4gICAgcGxheWVyMUNydWlzZXIsXG4gICAgcGxheWVyMUNydWlzZXJRdWFudGl0eSxcbiAgICBwbGF5ZXIxRGVzdHJveWVyLFxuICAgIHBsYXllcjFEZXN0cm95ZXJRdWFudGl0eSxcbiAgICBwbGF5ZXIxQm9hdCxcbiAgICBwbGF5ZXIxQm9hdFF1YW50aXR5LFxuICAgIHBsYXllcjJDYXJkLFxuICAgIHBsYXllcjJBaXJjcmFmdGNhcnJpZXIsXG4gICAgcGxheWVyMkFpcmNyYWZ0Y2FycmllclF1YW50aXR5LFxuICAgIHBsYXllcjJCYXR0bGVzaGlwLFxuICAgIHBsYXllcjJCYXR0bGVzaGlwUXVhbnRpdHksXG4gICAgcGxheWVyMlN1Ym1hcmluZSxcbiAgICBwbGF5ZXIyU3VibWFyaW5lUXVhbnRpdHksXG4gICAgcGxheWVyMkNydWlzZXIsXG4gICAgcGxheWVyMkNydWlzZXJRdWFudGl0eSxcbiAgICBwbGF5ZXIyRGVzdHJveWVyLFxuICAgIHBsYXllcjJEZXN0cm95ZXJRdWFudGl0eSxcbiAgICBwbGF5ZXIyQm9hdCxcbiAgICBwbGF5ZXIyQm9hdFF1YW50aXR5LFxuICB9O1xufSIsImltcG9ydCB7IHNoaXBzLCBnZXRBbGxTaGlwSW1hZ2VzLCBnZXRFeHBsb3Npb25JbWFnZSB9IGZyb20gJy4vc2hpcHMuanMnO1xuaW1wb3J0IGRvbUVsZW1lbnRzIGZyb20gJy4vZG9tRWxlbWVudHMuanMnO1xuaW1wb3J0IHsgYm9hcmRWYWxpZGF0aW9uIH0gZnJvbSAnLi9nYW1lYm9hcmRGYWN0b3J5LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFsZXJ0KHR5cGUsIG1lc3NhZ2UpIHtcbiAgZG9tRWxlbWVudHMoKS5hbGVydC5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm5vdGlmaWNhdGlvbiBpcy0ke3R5cGV9XCI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIj48L2J1dHRvbj5cbiAgICAgICAgPHAgY2xhc3M9XCJoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPiR7bWVzc2FnZX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcbiAgY29uc3QgYnV0dG9uID0gZG9tRWxlbWVudHMoKS5hbGVydC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHt9KTtcbiAgICBkb21FbGVtZW50cygpLmFsZXJ0LmlubmVySFRNTCA9ICcnO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdHcmlkKHR5cGUgPSAncGxheWVyJykge1xuICBjb25zdCBib2FyZCA9IHR5cGUgPT09ICdlbmVteScgPyBkb21FbGVtZW50cygpLmJvYXJkMiA6IGRvbUVsZW1lbnRzKCkuYm9hcmQ7XG4gIGJvYXJkLmlubmVySFRNTCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgIGJvYXJkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgIC8vIGFzc2lnbiB0aGUgaWQgdG8gZWFjaCBjZWxsXG4gICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ1AxJyk7XG4gICAgLy8gYXNzaWduIHRoZSBjb29yZGluYXRlcyB0byBlYWNoIGNlbGxcbiAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS14JywgaSAlIDEwKTtcbiAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS15JywgTWF0aC5mbG9vcihpIC8gMTApKTtcblxuICAgIC8vIGRlbGV0ZSBhbnkgZXZlbnQgbGlzdGVuZXJcbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge30pO1xuICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHt9KTtcbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7fSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlR3JpZCh0eXBlID0gJ3BsYXllcicsIGJvYXJkKSB7XG4gIGNvbnN0IGRvbUJvYXJkID0gdHlwZSA9PT0gJ2VuZW15JyA/IGRvbUVsZW1lbnRzKCkuYm9hcmQyIDogZG9tRWxlbWVudHMoKS5ib2FyZDtcbiAgY29uc3QgeyBzaGlwcyB9ID0gYm9hcmQ7XG4gIGNvbnN0IHsgbWlzc2VkQXR0YWNrcyB9ID0gYm9hcmQ7XG5cbiAgaWYgKHR5cGUgPT09ICdwbGF5ZXInKSB7XG4gICAgLy8gc2hvdyB0aGUgc2hpcHNcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGRvbUJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke3NoaXAuY29vcmRpbmF0ZXNbaV1bMF19XCJdW2RhdGEteT1cIiR7c2hpcC5jb29yZGluYXRlc1tpXVsxXX1cIl1gKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IGdldEFsbFNoaXBJbWFnZXMoc2hpcC5uYW1lKTtcbiAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7aW1hZ2VzW2ldfSlgO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gdXBkYXRlIHRoZSBtaXNzZWQgYXR0YWNrc1xuICBtaXNzZWRBdHRhY2tzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgY29uc3QgY2VsbCA9IGRvbUJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2Nvb3JkWzBdfVwiXVtkYXRhLXk9XCIke2Nvb3JkWzFdfVwiXWApO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGFzLWJhY2tncm91bmQtZGFuZ2VyJyk7XG4gIH0pO1xuXG4gIC8vIHVwZGF0ZSB0aGUgaGl0IGF0dGFja3NcbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIHNoaXAuaGl0cy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgY29uc3QgY2VsbCA9IGRvbUJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXg9XCIke2Nvb3JkWzBdfVwiXVtkYXRhLXk9XCIke2Nvb3JkWzFdfVwiXWApO1xuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC1zdWNjZXNzJyk7XG4gICAgICBpZiAodHlwZSA9PT0gJ2VuZW15Jykge1xuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtnZXRFeHBsb3Npb25JbWFnZSgpfSlgO1xuICAgICAgfVxuICAgICAgLy8gaWYgc2hpcCBpcyBzdW5rIHNvIGFkZCB0aGUgZnVsbCBpbWFnZVxuICAgICAgaWYgKHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtYmFja2dyb3VuZC1zdWNjZXNzJyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGFzLWJhY2tncm91bmQtc3VjY2Vzcy1kYXJrJyk7XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IGdldEFsbFNoaXBJbWFnZXMoc2hpcC5uYW1lKTtcbiAgICAgICAgY29uc3QgYWN0dWFsU2hpcFBhcnQgPSBzaGlwLmNvb3JkaW5hdGVzXG4gICAgICAgICAgLmZpbmRJbmRleCgoc2hpcENvb3JkKSA9PiBzaGlwQ29vcmRbMF0gPT09IGNvb3JkWzBdICYmIHNoaXBDb29yZFsxXSA9PT0gY29vcmRbMV0pO1xuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZXNbYWN0dWFsU2hpcFBhcnRdfSlgO1xuICAgICAgICAvLyByb3RhdGUgdG8gdGhlIGNvcnJlY3Qgb3JpZW50YXRpb25cbiAgICAgICAgY29uc3QgYWN0dWFsT3JpZW50YXRpb24gPSAoKSA9PiB7XG4gICAgICAgICAgaWYgKHNoaXAuY29vcmRpbmF0ZXNbMF1bMF0gPT09IHNoaXAuY29vcmRpbmF0ZXNbMV1bMF0pIHtcbiAgICAgICAgICAgIHJldHVybiAndmVydGljYWwnO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gJ2hvcml6b250YWwnO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoYWN0dWFsT3JpZW50YXRpb24oKSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgIGNlbGwuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDYXJkKGJvYXJkLCB0eXBlID0gJ1BsYXllcicpIHtcbiAgY29uc3QgYWlyY3JhZnRjYXJyaWVyID0gYm9hcmQuc2hpcHMuZmlsdGVyKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09ICdBaXJjcmFmdGNhcnJpZXInKTtcbiAgY29uc3QgYmF0dGxlc2hpcCA9IGJvYXJkLnNoaXBzLmZpbHRlcigoc2hpcCkgPT4gc2hpcC5uYW1lID09PSAnQmF0dGxlc2hpcCcpO1xuICBjb25zdCBjcnVpc2VyID0gYm9hcmQuc2hpcHMuZmlsdGVyKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09ICdDcnVpc2VyJyk7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IGJvYXJkLnNoaXBzLmZpbHRlcigoc2hpcCkgPT4gc2hpcC5uYW1lID09PSAnU3VibWFyaW5lJyk7XG4gIGNvbnN0IGRlc3Ryb3llciA9IGJvYXJkLnNoaXBzLmZpbHRlcigoc2hpcCkgPT4gc2hpcC5uYW1lID09PSAnRGVzdHJveWVyJyk7XG4gIGNvbnN0IGJvYXQgPSBib2FyZC5zaGlwcy5maWx0ZXIoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gJ0JvYXQnKTtcblxuICBsZXQgc2hpcHMgPSBbXTtcbiAgaWYgKHR5cGUgPT09ICdQbGF5ZXInKSB7XG4gICAgc2hpcHMgPSBbXG4gICAgICBbYWlyY3JhZnRjYXJyaWVyLCBkb21FbGVtZW50cygpLnBsYXllcjFBaXJjcmFmdGNhcnJpZXJRdWFudGl0eV0sXG4gICAgICBbYmF0dGxlc2hpcCwgZG9tRWxlbWVudHMoKS5wbGF5ZXIxQmF0dGxlc2hpcFF1YW50aXR5XSxcbiAgICAgIFtjcnVpc2VyLCBkb21FbGVtZW50cygpLnBsYXllcjFDcnVpc2VyUXVhbnRpdHldLFxuICAgICAgW3N1Ym1hcmluZSwgZG9tRWxlbWVudHMoKS5wbGF5ZXIxU3VibWFyaW5lUXVhbnRpdHldLFxuICAgICAgW2Rlc3Ryb3llciwgZG9tRWxlbWVudHMoKS5wbGF5ZXIxRGVzdHJveWVyUXVhbnRpdHldLFxuICAgICAgW2JvYXQsIGRvbUVsZW1lbnRzKCkucGxheWVyMUJvYXRRdWFudGl0eV0sXG4gICAgXTtcbiAgfSBlbHNlIHtcbiAgICBzaGlwcyA9IFtcbiAgICAgIFthaXJjcmFmdGNhcnJpZXIsIGRvbUVsZW1lbnRzKCkucGxheWVyMkFpcmNyYWZ0Y2FycmllclF1YW50aXR5XSxcbiAgICAgIFtiYXR0bGVzaGlwLCBkb21FbGVtZW50cygpLnBsYXllcjJCYXR0bGVzaGlwUXVhbnRpdHldLFxuICAgICAgW2NydWlzZXIsIGRvbUVsZW1lbnRzKCkucGxheWVyMkNydWlzZXJRdWFudGl0eV0sXG4gICAgICBbc3VibWFyaW5lLCBkb21FbGVtZW50cygpLnBsYXllcjJTdWJtYXJpbmVRdWFudGl0eV0sXG4gICAgICBbZGVzdHJveWVyLCBkb21FbGVtZW50cygpLnBsYXllcjJEZXN0cm95ZXJRdWFudGl0eV0sXG4gICAgICBbYm9hdCwgZG9tRWxlbWVudHMoKS5wbGF5ZXIyQm9hdFF1YW50aXR5XSxcbiAgICBdO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoc2hpcHNbaV1bMF0ubGVuZ3RoID09PSAwKSB7XG4gICAgICBzaGlwc1tpXVsxXS5pbm5lckhUTUwgPSAnMCc7XG4gICAgICBzaGlwc1tpXVsxXS5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtdGV4dC1zdWNjZXNzJyk7XG4gICAgICBzaGlwc1tpXVsxXS5jbGFzc0xpc3QuYWRkKCdoYXMtdGV4dC1kYW5nZXInKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3Vua2VkID0gc2hpcHNbaV1bMF1bMF0uaXNTdW5rKCk7XG4gICAgICBpZiAoc3Vua2VkKSB7XG4gICAgICAgIHNoaXBzW2ldWzFdLmlubmVySFRNTCA9ICcwJztcbiAgICAgICAgc2hpcHNbaV1bMV0uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXRleHQtc3VjY2VzcycpO1xuICAgICAgICBzaGlwc1tpXVsxXS5jbGFzc0xpc3QuYWRkKCdoYXMtdGV4dC1kYW5nZXInKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNoaXBzW2ldWzFdLmlubmVySFRNTCA9ICcxJztcbiAgICAgICAgc2hpcHNbaV1bMV0uY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXRleHQtZGFuZ2VyJyk7XG4gICAgICAgIHNoaXBzW2ldWzFdLmNsYXNzTGlzdC5hZGQoJ2hhcy10ZXh0LXN1Y2Nlc3MnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVBsYWNpbmdTaGlwKHNoaXBOYW1lKSB7XG4gIGlmIChzaGlwTmFtZSA9PT0gJ25vbmUnKSB7XG4gICAgZG9tRWxlbWVudHMoKS5wbGFjaW5nU2hpcC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qgc2hpcCA9IHNoaXBzLmZpbmQoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gc2hpcE5hbWUpO1xuICBkb21FbGVtZW50cygpLnBsYWNpbmdTaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICBkb21FbGVtZW50cygpLnBsYWNpbmdTaGlwLmlubmVySFRNTCA9IGBcbiAgICA8aW1nIHNyYz1cIiR7c2hpcC5mdWxsSW1hZ2V9XCIgYWx0PVwiJHtzaGlwTmFtZX1cIiB3aWR0aD1cIiR7c2hpcC5zaXplICogMjB9XCI+XG4gIGA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWN0aW9uKHR5cGUsIG1lc3NhZ2UsIGNvbG9yID0gJ2dyZWVuJykge1xuICBpZiAodHlwZSA9PT0gJ3BsYXllcicpIHtcbiAgICBkb21FbGVtZW50cygpLnBsYXllckFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1oaWRkZW4nKTtcbiAgICBkb21FbGVtZW50cygpLnBsYXllckFjdGlvbi5pbm5lckhUTUwgPSBtZXNzYWdlO1xuICAgIGlmIChjb2xvciA9PT0gJ2dyZWVuJykge1xuICAgICAgZG9tRWxlbWVudHMoKS5wbGF5ZXJBY3Rpb24uY2xhc3NMaXN0LmFkZCgnaXMtc3VjY2VzcycpO1xuICAgICAgZG9tRWxlbWVudHMoKS5wbGF5ZXJBY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtd2FybmluZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21FbGVtZW50cygpLnBsYXllckFjdGlvbi5jbGFzc0xpc3QuYWRkKCdpcy13YXJuaW5nJyk7XG4gICAgICBkb21FbGVtZW50cygpLnBsYXllckFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zdWNjZXNzJyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdlbmVteScpIHtcbiAgICBkb21FbGVtZW50cygpLmVuZW15QWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgIGRvbUVsZW1lbnRzKCkuZW5lbXlBY3Rpb24uaW5uZXJIVE1MID0gbWVzc2FnZTtcbiAgICBpZiAoY29sb3IgPT09ICdncmVlbicpIHtcbiAgICAgIGRvbUVsZW1lbnRzKCkuZW5lbXlBY3Rpb24uY2xhc3NMaXN0LmFkZCgnaXMtc3VjY2VzcycpO1xuICAgICAgZG9tRWxlbWVudHMoKS5lbmVteUFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy13YXJuaW5nJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbUVsZW1lbnRzKCkuZW5lbXlBY3Rpb24uY2xhc3NMaXN0LmFkZCgnaXMtd2FybmluZycpO1xuICAgICAgZG9tRWxlbWVudHMoKS5lbmVteUFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy1zdWNjZXNzJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrVmFsaWRNb3ZlKGJvYXJkLCBjZWxsLCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCwgc2hpcE5hbWUpIHtcbiAgY29uc3QgeCA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSwgMTApO1xuICBjb25zdCB5ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLCAxMCk7XG4gIGNvbnN0IGNvb3JkcyA9IFt4LCB5XTtcbiAgdHJ5IHtcbiAgICBib2FyZFZhbGlkYXRpb24oc2hpcE5hbWUsIHNoaXBMZW5ndGgsIGNvb3Jkcywgb3JpZW50YXRpb24sIGJvYXJkLnNoaXBzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc2V0U2hpcEltYWdlKGJvYXJkLCBjZWxsLCBzaGlwSW1hZ2VzLCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCwgc2hpcE5hbWUpIHtcbiAgY29uc3QgeCA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSwgMTApO1xuICBjb25zdCB5ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLCAxMCk7XG4gIGNvbnN0IHZhbGlkTW92ZSA9IGNoZWNrVmFsaWRNb3ZlKGJvYXJkLCBjZWxsLCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCwgc2hpcE5hbWUpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNlbGxUb0NoYW5nZSA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCdcbiAgICAgID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI1AxW2RhdGEteD1cIiR7eCArIGl9XCJdW2RhdGEteT1cIiR7eX1cIl1gKVxuICAgICAgOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjUDFbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3kgKyBpfVwiXWApO1xuICAgIGlmIChjZWxsVG9DaGFuZ2UpIHtcbiAgICAgIGlmICh2YWxpZE1vdmUpIHtcbiAgICAgICAgY2VsbFRvQ2hhbmdlLnN0eWxlLnRyYW5zZm9ybSA9IG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAncm90YXRlKDBkZWcpJyA6ICdyb3RhdGUoOTBkZWcpJztcbiAgICAgICAgY2VsbFRvQ2hhbmdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtzaGlwSW1hZ2VzW2ldfSlgO1xuICAgICAgICBjZWxsVG9DaGFuZ2UuY2xhc3NMaXN0LmFkZCgnaGFzLWJhY2tncm91bmQtc3VjY2VzcycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2VsbFRvQ2hhbmdlLmNsYXNzTGlzdC5hZGQoJ2hhcy1iYWNrZ3JvdW5kLWRhbmdlcicpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVTaGlwSW1hZ2UoY2VsbCwgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgpIHtcbiAgY29uc3QgeCA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSwgMTApO1xuICBjb25zdCB5ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLCAxMCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgY2VsbFRvQ2hhbmdlID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJ1xuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjUDFbZGF0YS14PVwiJHt4ICsgaX1cIl1bZGF0YS15PVwiJHt5fVwiXWApXG4gICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNQMVtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eSArIGl9XCJdYCk7XG4gICAgaWYgKGNlbGxUb0NoYW5nZSkge1xuICAgICAgaWYgKCFjZWxsVG9DaGFuZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpIHtcbiAgICAgICAgY2VsbFRvQ2hhbmdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICAgICAgfVxuICAgICAgY2VsbFRvQ2hhbmdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3MnKTtcbiAgICAgIGNlbGxUb0NoYW5nZS5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtYmFja2dyb3VuZC1kYW5nZXInKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5UGxhY2VTaGlwKGNlbGwsIG9yaWVudGF0aW9uLCBzaGlwTmFtZSwgc2hpcExlbmd0aCwgYm9hcmQpIHtcbiAgY29uc3QgeCA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSwgMTApO1xuICBjb25zdCB5ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLCAxMCk7XG4gIGNvbnN0IHZhbGlkTW92ZSA9IGNoZWNrVmFsaWRNb3ZlKGJvYXJkLCBjZWxsLCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCwgc2hpcE5hbWUpO1xuICBpZiAodmFsaWRNb3ZlKSB7XG4gICAgYm9hcmQucGxhY2VTaGlwKHNoaXBOYW1lLCBzaGlwTGVuZ3RoLCBbeCwgeV0sIG9yaWVudGF0aW9uKTtcbiAgICB1cGRhdGVDYXJkKGJvYXJkKTtcbiAgICB1cGRhdGVHcmlkKCdwbGF5ZXInLCBib2FyZCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzdG9wUGxhY2luZygpIHtcbiAgY29uc3QgY2VsbHMgPSBkb21FbGVtZW50cygpLmJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG5cbiAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGlmICghY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSkge1xuICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcbiAgICB9XG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtYmFja2dyb3VuZC1zdWNjZXNzJyk7XG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtYmFja2dyb3VuZC1kYW5nZXInKTtcbiAgICBjZWxsLnJlcGxhY2VXaXRoKGNlbGwuY2xvbmVOb2RlKHRydWUpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlc2V0QnV0dG9uKCkge1xuICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnaXMtZGFuZ2VyJywgJ2lzLWxhcmdlJywgJ2lzLWZ1bGx3aWR0aCcpO1xuICByZXNldEJ1dHRvbi5pbm5lckhUTUwgPSAnUmVzZXQgR2FtZSc7XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG4gIGRvbUVsZW1lbnRzKCkuYWxlcnQuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBlbmRHYW1lKHdpbm5lcikge1xuICBjcmVhdGVBbGVydCgnc3VjY2VzcycsIGAke3dpbm5lcn1gKTtcbiAgZG9tRWxlbWVudHMoKS5ib2FyZC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgZG9tRWxlbWVudHMoKS5ib2FyZDIuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gIGRvbUVsZW1lbnRzKCkucGxhY2luZ1NoaXAuY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gIGRvbUVsZW1lbnRzKCkucGxheWVyQWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICBkb21FbGVtZW50cygpLmVuZW15QWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICBjcmVhdGVSZXNldEJ1dHRvbigpO1xufVxuXG5mdW5jdGlvbiBzdGFydEF0dGFja2luZyhnYW1lSW5zdGFuY2UpIHtcbiAgY29uc3QgY2VsbHMgPSBkb21FbGVtZW50cygpLmJvYXJkMi5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgaWYgKCFjZWxsLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgJiYgIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykpIHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHggPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS14JyksIDEwKTtcbiAgICAgICAgY29uc3QgeSA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXknKSwgMTApO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGF0dGFjayA9IGdhbWVJbnN0YW5jZS5wbGF5ZXJBdHRhY2soeCwgeSk7XG4gICAgICAgICAgaWYgKGF0dGFjayA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICBjcmVhdGVBbGVydCgnc3VjY2VzcycsICdZb3UgaGl0IGEgc2hpcCEsIGtlZXAgZ29pbmchJyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRhY2sgPT09ICdkb3VibGVNaXNzJykge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICBjcmVhdGVBbGVydCgnbm9uZScsICdZb3UgbWlzc2VkISBhbHNvIHRoZSBjb21wdXRlciBtaXNzZWQhJyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRhY2sgPT09ICdtaXNzQW5kSGl0Jykge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICBjcmVhdGVBbGVydCgnZGFuZ2VyJywgJ1lvdSBtaXNzZWQhIHRoZSBjb21wdXRlciBoaXQgYSBzaGlwIScpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1cGRhdGVHcmlkKCdlbmVteScsIGdhbWVJbnN0YW5jZS5jb21wdXRlckJvYXJkKTtcbiAgICAgICAgICB1cGRhdGVHcmlkKCdwbGF5ZXInLCBnYW1lSW5zdGFuY2UucGxheWVyQm9hcmQpO1xuICAgICAgICAgIHVwZGF0ZUNhcmQoZ2FtZUluc3RhbmNlLmNvbXB1dGVyQm9hcmQsICdlbmVteScpO1xuICAgICAgICAgIHVwZGF0ZUNhcmQoZ2FtZUluc3RhbmNlLnBsYXllckJvYXJkKTtcbiAgICAgICAgICBpZiAoZ2FtZUluc3RhbmNlLmdhbWVFbmQoKSkge1xuICAgICAgICAgICAgZW5kR2FtZShnYW1lSW5zdGFuY2UuZ2FtZUVuZCgpKTtcbiAgICAgICAgICAgIGdhbWVJbnN0YW5jZS5yZXNldEdhbWUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjcmVhdGVBbGVydCgnd2FybmluZycsIGUubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7fSk7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge30pO1xuICB9KTtcbn1cblxubGV0IHBsYWNpbmcgPSB0cnVlO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRQbGFjaW5nKGdhbWVJbnN0YW5jZSwgb3JpZW50YXRpb24sIHNoaXBOYW1lKSB7XG4gIHVwZGF0ZUNhcmQoZ2FtZUluc3RhbmNlLmNvbXB1dGVyQm9hcmQsICdlbmVteScpO1xuXG4gIGNvbnN0IGNlbGxzID0gZG9tRWxlbWVudHMoKS5ib2FyZC5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICBjb25zdCBzaGlwSW1hZ2VzID0gZ2V0QWxsU2hpcEltYWdlcyhzaGlwTmFtZSk7XG4gIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwSW1hZ2VzLmxlbmd0aDtcblxuICBjb25zdCBzaGlwVHlwZXMgPSBbJ0FpcmNyYWZ0Y2FycmllcicsICdCYXR0bGVzaGlwJywgJ0NydWlzZXInLCAnU3VibWFyaW5lJywgJ0Rlc3Ryb3llcicsICdCb2F0J107XG4gIGNvbnN0IG5leHRTaGlwID0gc2hpcFR5cGVzLmluZGV4T2Yoc2hpcE5hbWUpICsgMTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdyJyAmJiBwbGFjaW5nKSB7XG4gICAgICBzdG9wUGxhY2luZygpO1xuICAgICAgc3RhcnRQbGFjaW5nKGdhbWVJbnN0YW5jZSwgb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCcsIHNoaXBOYW1lKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiBzZXRTaGlwSW1hZ2UoZ2FtZUluc3RhbmNlLnBsYXllckJvYXJkLCBjZWxsLCBzaGlwSW1hZ2VzLCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCwgc2hpcE5hbWUpKTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiByZW1vdmVTaGlwSW1hZ2UoY2VsbCwgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgpKTtcbiAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgcGxhY2VkID0gdHJ5UGxhY2VTaGlwKGNlbGwsIG9yaWVudGF0aW9uLCBzaGlwTmFtZSwgc2hpcExlbmd0aCxcbiAgICAgICAgZ2FtZUluc3RhbmNlLnBsYXllckJvYXJkKTtcbiAgICAgIGlmIChwbGFjZWQpIHtcbiAgICAgICAgc3RvcFBsYWNpbmcoKTtcbiAgICAgICAgaWYgKG5leHRTaGlwIDwgc2hpcFR5cGVzLmxlbmd0aCkge1xuICAgICAgICAgIHVwZGF0ZVBsYWNpbmdTaGlwKHNoaXBUeXBlc1tuZXh0U2hpcF0pO1xuICAgICAgICAgIHN0YXJ0UGxhY2luZyhnYW1lSW5zdGFuY2UsICdob3Jpem9udGFsJywgc2hpcFR5cGVzW25leHRTaGlwXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxhY2luZyA9IGZhbHNlO1xuICAgICAgICAgIHVwZGF0ZVBsYWNpbmdTaGlwKCdub25lJyk7XG4gICAgICAgICAgY3JlYXRlQWxlcnQoJ3N1Y2Nlc3MnLCAnQWxsIHNoaXBzIHBsYWNlZCwgcGxhY2luZyBjb21wdXRlciBzaGlwcycpO1xuICAgICAgICAgIHNob3dBY3Rpb24oJ3BsYXllcicsICdXYWl0aW5nIGZvciBjb21wdXRlcicsICdhbGVydCcpO1xuICAgICAgICAgIHNob3dBY3Rpb24oJ2VuZW15JywgJ1BsYWNpbmcgc2hpcHMnKTtcbiAgICAgICAgICAvLyB3YWl0IDMgc2Vjb25kIGJlZm9yZSBwbGFjaW5nIGNvbXB1dGVyIHNoaXBzIChzaW11bGF0ZXMgdGhpbmtpbmcpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBnYW1lSW5zdGFuY2UucmFuZG9tUGxhY2VTaGlwcyhnYW1lSW5zdGFuY2UuY29tcHV0ZXJCb2FyZCk7XG4gICAgICAgICAgICB1cGRhdGVDYXJkKGdhbWVJbnN0YW5jZS5jb21wdXRlckJvYXJkLCAnZW5lbXknKTtcbiAgICAgICAgICAgIGdhbWVJbnN0YW5jZS5zdGFydEdhbWUoKTtcbiAgICAgICAgICAgIGNyZWF0ZUFsZXJ0KCdzdWNjZXNzJywgJ0FsbCBzaGlwcyBwbGFjZWQsIEF0dGFjayEnKTtcbiAgICAgICAgICAgIHNob3dBY3Rpb24oJ3BsYXllcicsICdBdHRhY2sgdGhlIGVuZW15IScpO1xuICAgICAgICAgICAgc2hvd0FjdGlvbignZW5lbXknLCAnV2FpdGluZyBmb3IgYXR0YWNrJywgJ2FsZXJ0Jyk7XG4gICAgICAgICAgICBzdGFydEF0dGFja2luZyhnYW1lSW5zdGFuY2UpO1xuICAgICAgICAgIH0sIDMwMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufSIsImltcG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfSBmcm9tICcuL2dhbWVib2FyZEZhY3RvcnkuanMnOyBcbmltcG9ydCBjcmVhdGVTaGlwIGZyb20gJy4vc2hpcEZhY3RvcnkuanMnOyBcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBnYW1lID0ge1xuICAgIGFjdHVhbFBsYXllcjogMSxcbiAgICBnYW1lU3RhcnRlZDogZmFsc2UsXG4gICAgcGxheWVyQm9hcmQ6IGdhbWVib2FyZEZhY3RvcnkoKSxcbiAgICBjb21wdXRlckJvYXJkOiBnYW1lYm9hcmRGYWN0b3J5KCksXG4gICAgY2hhbmdlUGxheWVyKCkge1xuICAgICAgdGhpcy5hY3R1YWxQbGF5ZXIgPSB0aGlzLmFjdHVhbFBsYXllciA9PT0gMSA/IDIgOiAxO1xuICAgIH0sXG4gICAgcmFuZG9tUGxhY2VTaGlwcyhib2FyZCkge1xuICAgICAgY29uc3Qgc2hpcHMgPSBbXG4gICAgICAgIHsgbmFtZTogJ0FpcmNyYWZ0Y2FycmllcicsIHZhbHVlOiBjcmVhdGVTaGlwKDUpIH0sXG4gICAgICAgIHsgbmFtZTogJ0JhdHRsZXNoaXAnLCB2YWx1ZTogY3JlYXRlU2hpcCg0KSB9LFxuICAgICAgICB7IG5hbWU6ICdDcnVpc2VyJywgdmFsdWU6IGNyZWF0ZVNoaXAoMykgfSxcbiAgICAgICAgeyBuYW1lOiAnU3VibWFyaW5lJywgdmFsdWU6IGNyZWF0ZVNoaXAoMikgfSxcbiAgICAgICAgeyBuYW1lOiAnRGVzdHJveWVyJywgdmFsdWU6IGNyZWF0ZVNoaXAoMikgfSxcbiAgICAgICAgeyBuYW1lOiAnQm9hdCcsIHZhbHVlOiBjcmVhdGVTaGlwKDIpIH0sXG4gICAgICBdO1xuICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gJyc7XG4gICAgICAgIGxldCB2YWxpZFNoaXAgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCF2YWxpZFNoaXApIHtcbiAgICAgICAgICBjb29yZGluYXRlcyA9IFtcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICBdO1xuICAgICAgICAgIG9yaWVudGF0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwLm5hbWUsIHNoaXAudmFsdWUubGVuZ3RoLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgdmFsaWRTaGlwID0gdHJ1ZTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdmFsaWRTaGlwID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgIGlmICh0aGlzLnBsYXllckJvYXJkLnNoaXBzLmxlbmd0aCA+PSA2ICYmIHRoaXMuY29tcHV0ZXJCb2FyZC5zaGlwcy5sZW5ndGggPj0gNikge1xuICAgICAgICB0aGlzLmdhbWVTdGFydGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxhY2UgYWxsIHlvdXIgc2hpcHMnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNoZWNrVmFsaWRBdHRhY2soeCwgeSkge1xuICAgICAgY29uc3QgY29vcmRzID0gW3gsIHldO1xuICAgICAgaWYgKCF0aGlzLmdhbWVTdGFydGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gc3RhcnQgdGhlIGdhbWUnKTtcbiAgICAgIH1cbiAgICAgIGlmICh4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nvb3JkaW5hdGVzIGFyZSBub3QgdmFsaWQnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1pc3NlcyA9IHRoaXMuY29tcHV0ZXJCb2FyZC5taXNzZWRBdHRhY2tzO1xuICAgICAgY29uc3QgbWlzc2VkID0gbWlzc2VzLnNvbWUoKG1pc3MpID0+IG1pc3NbMF0gPT09IGNvb3Jkc1swXSAmJiBtaXNzWzFdID09PSBjb29yZHNbMV0pO1xuXG4gICAgICBjb25zdCBoaXRzID0gdGhpcy5jb21wdXRlckJvYXJkLnNoaXBzLm1hcCgoc2hpcCkgPT4gc2hpcC5oaXRzKTtcbiAgICAgIGNvbnN0IGhpdHRlZCA9IGhpdHMuc29tZSgoaGl0KSA9PiBoaXQuc29tZSgoaGl0Q29vcmRzKSA9PiBoaXRDb29yZHNbMF0gPT09IGNvb3Jkc1swXSAmJiBoaXRDb29yZHNbMV0gPT09IGNvb3Jkc1sxXSkpO1xuICAgICAgaWYgKG1pc3NlZCB8fCBoaXR0ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgYWxyZWFkeSBhdHRhY2tlZCB0aGlzIGNvb3JkaW5hdGVzJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHBsYXllckF0dGFjayh4LCB5KSB7XG4gICAgICBpZiAodGhpcy5jaGVja1ZhbGlkQXR0YWNrKHgsIHkpKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKFt4LCB5XSk7XG4gICAgICAgIGlmICh0aGlzLmNvbXB1dGVyQm9hcmQuc2hpcHMuc29tZSgoc2hpcCkgPT4gc2hpcC5oaXRzLnNvbWUoKGhpdCkgPT4gaGl0WzBdID09PSB4ICYmIGhpdFsxXSA9PT0geSkpKSB7XG4gICAgICAgICAgcmV0dXJuICdoaXQnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKCk7XG4gICAgICAgIGNvbnN0IGNwdUF0dGFjayA9IHRoaXMuY29tcHV0ZXJBdHRhY2soKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VQbGF5ZXIoKTtcbiAgICAgICAgaWYgKGNwdUF0dGFjayA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgcmV0dXJuICdkb3VibGVNaXNzJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICdtaXNzQW5kSGl0JztcbiAgICB9LFxuICAgIGNvbXB1dGVyQXR0YWNrKGhpdHMgPSAwKSB7XG4gICAgICBpZiAoIXRoaXMuZ2FtZVN0YXJ0ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBzdGFydCB0aGUgZ2FtZScpO1xuICAgICAgfVxuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgXTtcbiAgICAgIGlmICh0aGlzLnBsYXllckJvYXJkLm1pc3NlZEF0dGFja3Muc29tZSgobWlzc2VkQXR0YWNrKSA9PiBtaXNzZWRBdHRhY2tbMF0gPT09IGNvb3JkaW5hdGVzWzBdICYmIG1pc3NlZEF0dGFja1sxXSA9PT0gY29vcmRpbmF0ZXNbMV0pKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJBdHRhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gICAgICAgIGlmICh0aGlzLnBsYXllckJvYXJkLnNoaXBzLnNvbWUoKHNoaXApID0+IHNoaXAuaGl0cy5zb21lKChoaXQpID0+IGhpdFswXSA9PT0gY29vcmRpbmF0ZXNbMF0gJiYgaGl0WzFdID09PSBjb29yZGluYXRlc1sxXSkpKSB7XG4gICAgICAgICAgdGhpcy5jb21wdXRlckF0dGFjayhoaXRzICsgMSk7XG4gICAgICAgICAgcmV0dXJuICdoaXQnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKCk7XG4gICAgICB9XG4gICAgICBpZiAoaGl0cyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJ21pc3MnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhpdHM7XG4gICAgfSxcbiAgICBnYW1lRW5kKCkge1xuICAgICAgaWYgKCF0aGlzLmdhbWVTdGFydGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gc3RhcnQgdGhlIGdhbWUnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBsYXllckJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiAnQ29tcHV0ZXIgd2lucyc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb21wdXRlckJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiAnUGxheWVyIHdpbnMnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgcmVzZXRHYW1lKCkge1xuICAgICAgdGhpcy5hY3R1YWxQbGF5ZXIgPSAxO1xuICAgICAgdGhpcy5nYW1lU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5wbGF5ZXJCb2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKTtcbiAgICAgIHRoaXMuY29tcHV0ZXJCb2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKTtcbiAgICB9LFxuICB9O1xuICByZXR1cm4gZ2FtZTtcbn07XG4iLCJpbXBvcnQgY3JlYXRlU2hpcCBmcm9tICcuL3NoaXBGYWN0b3J5LmpzJztcblxuLy8gZnVuY3Rpb24gdG8gZ2V0IHRoZSBjb29yZGluYXRlcyBvZiBhIHNoaXBcbmZ1bmN0aW9uIGdldFNoaXBDb29yZGluYXRlcyhjb29yZGluYXRlcywgbGVuZ3RoLCBvcmllbnRhdGlvbikge1xuICBjb25zdCBbeCwgeV0gPSBjb29yZGluYXRlcztcbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW3ggKyBpLCB5XSk7XG4gICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW3gsIHkgKyBpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzaGlwQ29vcmRpbmF0ZXM7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGdldCB0aGUgc2hpcCB0aGF0IHdhcyBoaXRcbmZ1bmN0aW9uIGdldEhpdFNoaXAoY29vcmRpbmF0ZXMsIHNoaXBzKSB7XG4gIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGVzO1xuICBsZXQgc2hpcEhpdCA9IG51bGw7XG4gIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKHNoaXBDb29yZGluYXRlKSA9PiB7XG4gICAgICBpZiAoc2hpcENvb3JkaW5hdGVbMF0gPT09IHggJiYgc2hpcENvb3JkaW5hdGVbMV0gPT09IHkpIHtcbiAgICAgICAgc2hpcEhpdCA9IHNoaXA7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gc2hpcEhpdDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVOYW1lKG5hbWUpIHtcbiAgLy8gQWlyY3JhZnRjYXJyaWVyLCBCYXR0bGVzaGlwLCBDcnVpc2VyLCBTdWJtYXJpbmUsIERlc3Ryb3llciwgQm9hdFxuICBpZiAobmFtZSAhPT0gJ0FpcmNyYWZ0Y2FycmllcicgJiYgbmFtZSAhPT0gJ0JhdHRsZXNoaXAnICYmIG5hbWUgIT09ICdDcnVpc2VyJ1xuICAmJiBuYW1lICE9PSAnU3VibWFyaW5lJyAmJiBuYW1lICE9PSAnRGVzdHJveWVyJyAmJiBuYW1lICE9PSAnQm9hdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXAgbmFtZSBtdXN0IGJlIEFpcmNyYWZ0Y2FycmllciwgQmF0dGxlc2hpcCwgQ3J1aXNlciwgU3VibWFyaW5lLCBEZXN0cm95ZXIgb3IgQm9hdCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU2hpcExlbmd0aChsZW5ndGgpIHtcbiAgaWYgKGxlbmd0aCA8IDEgfHwgbGVuZ3RoID4gNSkge1xuICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBsZW5ndGggbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDUnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZU9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gIGlmIChvcmllbnRhdGlvbiAhPT0gJ2hvcml6b250YWwnICYmIG9yaWVudGF0aW9uICE9PSAndmVydGljYWwnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIG9yaWVudGF0aW9uIG11c3QgYmUgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGNvb3JkaW5hdGVzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBjb29yZGluYXRlcyBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gIH1cbiAgaWYgKGNvb3JkaW5hdGVzLmxlbmd0aCAhPT0gMikge1xuICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBjb29yZGluYXRlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHR3byBudW1iZXJzJyk7XG4gIH1cbiAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgY29vcmRpbmF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBjb29yZGluYXRlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHR3byBudW1iZXJzJyk7XG4gICAgfVxuICAgIGlmIChjb29yZGluYXRlIDwgMCB8fCBjb29yZGluYXRlID4gOSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIGNvb3JkaW5hdGVzIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA5Jyk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVPdmVybGFwKGNvb3JkaW5hdGVzLCBsZW5ndGgsIG9yaWVudGF0aW9uLCBzaGlwcykge1xuICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBnZXRTaGlwQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcENvb3JkaW5hdGVzLmZvckVhY2goKHNoaXBDb29yZGluYXRlKSA9PiB7XG4gICAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKHNoaXBDb29yZGluYXRlMikgPT4ge1xuICAgICAgICBpZiAoc2hpcENvb3JkaW5hdGVbMF0gPT09IHNoaXBDb29yZGluYXRlMlswXSAmJiBzaGlwQ29vcmRpbmF0ZVsxXSA9PT0gc2hpcENvb3JkaW5hdGUyWzFdKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwcyBjYW5ub3Qgb3ZlcmxhcCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib2FyZFZhbGlkYXRpb24obmFtZSwgbGVuZ3RoLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24sIHNoaXBzKSB7XG4gIHZhbGlkYXRlTmFtZShuYW1lKTtcbiAgdmFsaWRhdGVTaGlwTGVuZ3RoKGxlbmd0aCk7XG4gIHZhbGlkYXRlT3JpZW50YXRpb24ob3JpZW50YXRpb24pO1xuICB2YWxpZGF0ZUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcbiAgdmFsaWRhdGVPdmVybGFwKGNvb3JkaW5hdGVzLCBsZW5ndGgsIG9yaWVudGF0aW9uLCBzaGlwcyk7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBnYW1lYm9hcmQgZmFjdG9yeSBmdW5jdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVib2FyZEZhY3RvcnkoKSB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IHtcbiAgICBzaGlwczogW10sXG4gICAgbWlzc2VkQXR0YWNrczogW10sXG4gICAgcGxhY2VTaGlwKG5hbWUsIGxlbmd0aCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKSB7XG4gICAgICAvLyB2YWxpZGF0ZSBzaGlwXG4gICAgICBpZiAoYm9hcmRWYWxpZGF0aW9uKG5hbWUsIGxlbmd0aCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uLCB0aGlzLnNoaXBzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvL2NyZWF0ZSBzaGlwIGZ1bmN0aW9uXG4gICAgICBjb25zdCBzaGlwID0gY3JlYXRlU2hpcChsZW5ndGgpOyBcbiAgICAgIHNoaXAubmFtZSA9IG5hbWU7XG4gICAgICBzaGlwLmNvb3JkaW5hdGVzID0gZ2V0U2hpcENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBsZW5ndGgsIG9yaWVudGF0aW9uKTtcblxuICAgICAgLy8gY2hlY2sgaWYgc2hpcCBpcyBvZmYgdGhlIGJvYXJkXG4gICAgICBjb25zdCBzaGlwT2ZmQm9hcmQgPSBzaGlwLmNvb3JkaW5hdGVzLnNvbWUoKHNoaXBDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHNoaXBDb29yZGluYXRlO1xuICAgICAgICByZXR1cm4geCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDk7XG4gICAgICB9KTtcbiAgICAgIGlmIChzaGlwT2ZmQm9hcmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwcyBjYW5ub3QgYmUgcGxhY2VkIG9mZiB0aGUgYm9hcmQnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuICAgIH0sXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgICAgY29uc3Qgc2hpcEhpdCA9IGdldEhpdFNoaXAoY29vcmRpbmF0ZXMsIHRoaXMuc2hpcHMpO1xuICAgICAgaWYgKHNoaXBIaXQpIHtcbiAgICAgICAgc2hpcEhpdC5oaXQoY29vcmRpbmF0ZXMpOyBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubWlzc2VkQXR0YWNrcy5wdXNoKGNvb3JkaW5hdGVzKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFsbFNoaXBzU3VuaygpIHtcbiAgICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGdhbWVib2FyZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaGlwKGxlbmd0aCkge1xuICBjb25zdCBzaGlwID0ge1xuICAgIGxlbmd0aCxcbiAgICBoaXRzOiBbXSxcbiAgICBoaXQocG9zaXRpb24pIHtcbiAgICAgIHRoaXMuaGl0cy5wdXNoKHBvc2l0aW9uKTtcbiAgICB9LFxuICAgIGlzU3VuaygpIHtcbiAgICAgIHJldHVybiB0aGlzLmhpdHMubGVuZ3RoID09PSB0aGlzLmxlbmd0aDtcbiAgICB9LFxuICB9O1xuICByZXR1cm4gc2hpcDtcbn1cbiIsImltcG9ydCBhaXJjcmFmdGNhcnJpZXIgZnJvbSAnLi9pbWFnZXMvYWlyY3JhZnRjYXJyaWVyLnBuZyc7XG5pbXBvcnQgYWlyY3JhZnRjYXJyaWVyMSBmcm9tICcuL2ltYWdlcy9haXJjcmFmdGNhcnJpZXIxLnBuZyc7XG5pbXBvcnQgYWlyY3JhZnRjYXJyaWVyMiBmcm9tICcuL2ltYWdlcy9haXJjcmFmdGNhcnJpZXIyLnBuZyc7XG5pbXBvcnQgYWlyY3JhZnRjYXJyaWVyMyBmcm9tICcuL2ltYWdlcy9haXJjcmFmdGNhcnJpZXIzLnBuZyc7XG5pbXBvcnQgYWlyY3JhZnRjYXJyaWVyNCBmcm9tICcuL2ltYWdlcy9haXJjcmFmdGNhcnJpZXI0LnBuZyc7XG5pbXBvcnQgYWlyY3JhZnRjYXJyaWVyNSBmcm9tICcuL2ltYWdlcy9haXJjcmFmdGNhcnJpZXI1LnBuZyc7XG5cbmltcG9ydCBiYXR0bGVzaGlwIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXAucG5nJztcbmltcG9ydCBiYXR0bGVzaGlwMSBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwMS5wbmcnO1xuaW1wb3J0IGJhdHRsZXNoaXAyIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXAyLnBuZyc7XG5pbXBvcnQgYmF0dGxlc2hpcDMgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcDMucG5nJztcbmltcG9ydCBiYXR0bGVzaGlwNCBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwNC5wbmcnO1xuXG5pbXBvcnQgY3J1aXNlciBmcm9tICcuL2ltYWdlcy9jcnVpc2VyLnBuZyc7XG5pbXBvcnQgY3J1aXNlcjEgZnJvbSAnLi9pbWFnZXMvY3J1aXNlcjEucG5nJztcbmltcG9ydCBjcnVpc2VyMiBmcm9tICcuL2ltYWdlcy9jcnVpc2VyMi5wbmcnO1xuaW1wb3J0IGNydWlzZXIzIGZyb20gJy4vaW1hZ2VzL2NydWlzZXIzLnBuZyc7XG5cbmltcG9ydCBkZXN0cm95ZXIgZnJvbSAnLi9pbWFnZXMvZGVzdHJveWVyLnBuZyc7XG5pbXBvcnQgZGVzdHJveWVyMSBmcm9tICcuL2ltYWdlcy9kZXN0cm95ZXIxLnBuZyc7XG5pbXBvcnQgZGVzdHJveWVyMiBmcm9tICcuL2ltYWdlcy9kZXN0cm95ZXIyLnBuZyc7XG5pbXBvcnQgZGVzdHJveWVyMyBmcm9tICcuL2ltYWdlcy9kZXN0cm95ZXIzLnBuZyc7XG5cbmltcG9ydCBzdWJtYXJpbmUgZnJvbSAnLi9pbWFnZXMvc3VibWFyaW5lLnBuZyc7XG5pbXBvcnQgc3VibWFyaW5lMSBmcm9tICcuL2ltYWdlcy9zdWJtYXJpbmUxLnBuZyc7XG5pbXBvcnQgc3VibWFyaW5lMiBmcm9tICcuL2ltYWdlcy9zdWJtYXJpbmUyLnBuZyc7XG5cbmltcG9ydCBib2F0IGZyb20gJy4vaW1hZ2VzL2JvYXQucG5nJztcbmltcG9ydCBib2F0MSBmcm9tICcuL2ltYWdlcy9ib2F0MS5wbmcnO1xuaW1wb3J0IGJvYXQyIGZyb20gJy4vaW1hZ2VzL2JvYXQyLnBuZyc7XG5cbmltcG9ydCBleHBsb3Npb24gZnJvbSAnLi9pbWFnZXMvZXhwbG9zaW9uLnBuZyc7XG5cbmNvbnN0IGFpcmNyYWZ0Y2FycmllclNoaXAgPSB7XG4gIG5hbWU6ICdBaXJjcmFmdGNhcnJpZXInLFxuICBzaXplOiA1LFxuICBmdWxsSW1hZ2U6IGFpcmNyYWZ0Y2FycmllcixcbiAgaW1hZ2VzOiBbYWlyY3JhZnRjYXJyaWVyMSwgYWlyY3JhZnRjYXJyaWVyMiwgYWlyY3JhZnRjYXJyaWVyMywgYWlyY3JhZnRjYXJyaWVyNCwgYWlyY3JhZnRjYXJyaWVyNV0sXG59O1xuXG5jb25zdCBiYXR0bGVzaGlwU2hpcCA9IHtcbiAgbmFtZTogJ0JhdHRsZXNoaXAnLFxuICBzaXplOiA0LFxuICBmdWxsSW1hZ2U6IGJhdHRsZXNoaXAsXG4gIGltYWdlczogW2JhdHRsZXNoaXAxLCBiYXR0bGVzaGlwMiwgYmF0dGxlc2hpcDMsIGJhdHRsZXNoaXA0XSxcbn07XG5cbmNvbnN0IGNydWlzZXJTaGlwID0ge1xuICBuYW1lOiAnQ3J1aXNlcicsXG4gIHNpemU6IDMsXG4gIGZ1bGxJbWFnZTogY3J1aXNlcixcbiAgaW1hZ2VzOiBbY3J1aXNlcjEsIGNydWlzZXIyLCBjcnVpc2VyM10sXG59O1xuXG5jb25zdCBzdWJtYXJpbmVTaGlwID0ge1xuICBuYW1lOiAnU3VibWFyaW5lJyxcbiAgc2l6ZTogMixcbiAgZnVsbEltYWdlOiBzdWJtYXJpbmUsXG4gIGltYWdlczogW3N1Ym1hcmluZTEsIHN1Ym1hcmluZTIsXSxcbn07XG5cbmNvbnN0IGRlc3Ryb3llclNoaXAgPSB7XG4gIG5hbWU6ICdEZXN0cm95ZXInLFxuICBzaXplOiAzLFxuICBmdWxsSW1hZ2U6IGRlc3Ryb3llcixcbiAgaW1hZ2VzOiBbZGVzdHJveWVyMSwgZGVzdHJveWVyMiwgZGVzdHJveWVyM10sXG59O1xuXG5jb25zdCBib2F0U2hpcCA9IHtcbiAgbmFtZTogJ0JvYXQnLFxuICBzaXplOiAyLFxuICBmdWxsSW1hZ2U6IGJvYXQsXG4gIGltYWdlczogW2JvYXQxLCBib2F0Ml0sXG59O1xuXG5leHBvcnQgY29uc3Qgc2hpcHMgPSBbXG4gIGFpcmNyYWZ0Y2FycmllclNoaXAsXG4gIGJhdHRsZXNoaXBTaGlwLFxuICBjcnVpc2VyU2hpcCxcbiAgc3VibWFyaW5lU2hpcCxcbiAgZGVzdHJveWVyU2hpcCxcbiAgYm9hdFNoaXAsXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsU2hpcEltYWdlcyhzaGlwTmFtZSkge1xuICBjb25zdCBzaGlwID0gc2hpcHMuZmluZCgoc2hpcCkgPT4gc2hpcC5uYW1lID09PSBzaGlwTmFtZSk7XG4gIHJldHVybiBzaGlwLmltYWdlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4cGxvc2lvbkltYWdlKCkge1xuICByZXR1cm4gZXhwbG9zaW9uO1xufSIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iYWNrZ3JvdW5kYmF0bGVzaGlwcy5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5ib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbn1cblxuLmNlbGwge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDYzJSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jZWxsLmhhcy1iYWNrZ3JvdW5kLWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjYzKSAhaW1wb3J0YW50O1xufVxuXG4uY2VsbC5oYXMtYmFja2dyb3VuZC1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMjU1LCAwLCAwLjYzKSAhaW1wb3J0YW50O1xufVxuXG4uY2VsbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTUsIDIxNSwgMjE1LCAwLjUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pcy1mdWxsaGVpZ2h0IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi50aXR0bGUtdGFnID4gc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIHdpZHRoOiAxMzVweDtcbn1cblxuLmhhcy1vY2VhbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHdDQUF3QztFQUN4QyxvQ0FBb0M7RUFDcEMsU0FBUztFQUNULG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5REFBd0Q7QUFDMURcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJvYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyA2MyUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNlbGwuaGFzLWJhY2tncm91bmQtZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjYzKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY2VsbC5oYXMtYmFja2dyb3VuZC1zdWNjZXNzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDI1NSwgMCwgMC42MykgIWltcG9ydGFudDtcXG59XFxuXFxuLmNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNSwgMjE1LCAyMTUsIDAuNSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pcy1mdWxsaGVpZ2h0IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4udGl0dGxlLXRhZyA+IHNwYW4ge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIHdpZHRoOiAxMzVweDtcXG59XFxuXFxuLmhhcy1vY2VhbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvYmFja2dyb3VuZGJhdGxlc2hpcHMucG5nKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtcbiAgZHJhd0dyaWQsXG4gIHNob3dBY3Rpb24sXG4gIHVwZGF0ZVBsYWNpbmdTaGlwLFxuICBjcmVhdGVBbGVydCxcbiAgc3RhcnRQbGFjaW5nLFxufSBmcm9tICcuL2RvbU1hbmFnZXIuanMnO1xuaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lLmpzJztcblxuY29uc3QgZ2FtZUluc3RhbmNlID0gZ2FtZSgpO1xuXG4vLyBkcmF3IHRoZSBib2FyZHNcbmRyYXdHcmlkKCk7XG5kcmF3R3JpZCgnZW5lbXknKTtcblxuLy8gU2hvdyBhY3Rpb24gdG8gdGhlIHBsYXllclxuc2hvd0FjdGlvbigncGxheWVyJywgJ1BsYWNlIHlvdXIgc2hpcHMnKTtcbnNob3dBY3Rpb24oJ2VuZW15JywgJ1dhaXRpbmcgRm9yIFNoaXBzJywgJ2FsZXJ0Jyk7XG5cbnVwZGF0ZVBsYWNpbmdTaGlwKCdBaXJjcmFmdGNhcnJpZXInKTtcblxuLy8gU2hvdyB0aGUgYWxlcnRcbmNyZWF0ZUFsZXJ0KCdzdWNjZXNzJywgJ0dhbWUgc3RhcnRlZCwgcGxhY2UgeW91ciBzaGlwcyAoUHJlc3MgUiB0byByb3RhdGUpJyk7XG5cbnN0YXJ0UGxhY2luZyhnYW1lSW5zdGFuY2UsICdob3Jpem9udGFsJywgJ0FpcmNyYWZ0Y2FycmllcicpOyJdLCJuYW1lcyI6WyJib2FyZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJib2FyZDIiLCJwbGF5ZXJBY3Rpb24iLCJlbmVteUFjdGlvbiIsInBsYWNpbmdTaGlwIiwiYWxlcnQiLCJlbmVteVN0YXR1c1RhZyIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5ZXIxQ2FyZCIsInBsYXllcjFBaXJjcmFmdGNhcnJpZXIiLCJwbGF5ZXIxQWlyY3JhZnRjYXJyaWVyUXVhbnRpdHkiLCJwbGF5ZXIxQmF0dGxlc2hpcCIsInBsYXllcjFCYXR0bGVzaGlwUXVhbnRpdHkiLCJwbGF5ZXIxU3VibWFyaW5lIiwicGxheWVyMVN1Ym1hcmluZVF1YW50aXR5IiwicGxheWVyMUNydWlzZXIiLCJwbGF5ZXIxQ3J1aXNlclF1YW50aXR5IiwicGxheWVyMURlc3Ryb3llciIsInBsYXllcjFEZXN0cm95ZXJRdWFudGl0eSIsInBsYXllcjFCb2F0IiwicGxheWVyMUJvYXRRdWFudGl0eSIsInBsYXllcjJDYXJkIiwicGxheWVyMkFpcmNyYWZ0Y2FycmllciIsInBsYXllcjJBaXJjcmFmdGNhcnJpZXJRdWFudGl0eSIsInBsYXllcjJCYXR0bGVzaGlwIiwicGxheWVyMkJhdHRsZXNoaXBRdWFudGl0eSIsInBsYXllcjJTdWJtYXJpbmUiLCJwbGF5ZXIyU3VibWFyaW5lUXVhbnRpdHkiLCJwbGF5ZXIyQ3J1aXNlciIsInBsYXllcjJDcnVpc2VyUXVhbnRpdHkiLCJwbGF5ZXIyRGVzdHJveWVyIiwicGxheWVyMkRlc3Ryb3llclF1YW50aXR5IiwicGxheWVyMkJvYXQiLCJwbGF5ZXIyQm9hdFF1YW50aXR5IiwiZ2V0RG9tRWxlbWVudHMiLCJzaGlwcyIsImdldEFsbFNoaXBJbWFnZXMiLCJnZXRFeHBsb3Npb25JbWFnZSIsImRvbUVsZW1lbnRzIiwiYm9hcmRWYWxpZGF0aW9uIiwiY3JlYXRlQWxlcnQiLCJ0eXBlIiwibWVzc2FnZSIsImlubmVySFRNTCIsImNvbmNhdCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZHJhd0dyaWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJpIiwiY2VsbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInNldEF0dHJpYnV0ZSIsIk1hdGgiLCJmbG9vciIsInVwZGF0ZUdyaWQiLCJkb21Cb2FyZCIsIm1pc3NlZEF0dGFja3MiLCJmb3JFYWNoIiwic2hpcCIsImNvb3JkaW5hdGVzIiwiaW1hZ2VzIiwibmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiY29vcmQiLCJoaXRzIiwiaXNTdW5rIiwicmVtb3ZlIiwiYWN0dWFsU2hpcFBhcnQiLCJmaW5kSW5kZXgiLCJzaGlwQ29vcmQiLCJhY3R1YWxPcmllbnRhdGlvbiIsInRyYW5zZm9ybSIsInVwZGF0ZUNhcmQiLCJhaXJjcmFmdGNhcnJpZXIiLCJmaWx0ZXIiLCJiYXR0bGVzaGlwIiwiY3J1aXNlciIsInN1Ym1hcmluZSIsImRlc3Ryb3llciIsImJvYXQiLCJzdW5rZWQiLCJ1cGRhdGVQbGFjaW5nU2hpcCIsInNoaXBOYW1lIiwiZmluZCIsImZ1bGxJbWFnZSIsInNpemUiLCJzaG93QWN0aW9uIiwiY29sb3IiLCJjaGVja1ZhbGlkTW92ZSIsIm9yaWVudGF0aW9uIiwic2hpcExlbmd0aCIsIngiLCJwYXJzZUludCIsImdldEF0dHJpYnV0ZSIsInkiLCJjb29yZHMiLCJlIiwic2V0U2hpcEltYWdlIiwic2hpcEltYWdlcyIsInZhbGlkTW92ZSIsImNlbGxUb0NoYW5nZSIsInJlbW92ZVNoaXBJbWFnZSIsImNvbnRhaW5zIiwidHJ5UGxhY2VTaGlwIiwicGxhY2VTaGlwIiwic3RvcFBsYWNpbmciLCJjZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXBsYWNlV2l0aCIsImNsb25lTm9kZSIsImNyZWF0ZVJlc2V0QnV0dG9uIiwicmVzZXRCdXR0b24iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImVuZEdhbWUiLCJ3aW5uZXIiLCJzdGFydEF0dGFja2luZyIsImdhbWVJbnN0YW5jZSIsImF0dGFjayIsInBsYXllckF0dGFjayIsImNvbXB1dGVyQm9hcmQiLCJwbGF5ZXJCb2FyZCIsImdhbWVFbmQiLCJyZXNldEdhbWUiLCJwbGFjaW5nIiwic3RhcnRQbGFjaW5nIiwic2hpcFR5cGVzIiwibmV4dFNoaXAiLCJpbmRleE9mIiwia2V5IiwicGxhY2VkIiwic2V0VGltZW91dCIsInJhbmRvbVBsYWNlU2hpcHMiLCJzdGFydEdhbWUiLCJnYW1lYm9hcmRGYWN0b3J5IiwiY3JlYXRlU2hpcCIsImdhbWUiLCJhY3R1YWxQbGF5ZXIiLCJnYW1lU3RhcnRlZCIsImNoYW5nZVBsYXllciIsInZhbHVlIiwidmFsaWRTaGlwIiwicmFuZG9tIiwiZXJyb3IiLCJFcnJvciIsImNoZWNrVmFsaWRBdHRhY2siLCJtaXNzZXMiLCJtaXNzZWQiLCJzb21lIiwibWlzcyIsIm1hcCIsImhpdHRlZCIsImhpdCIsImhpdENvb3JkcyIsInJlY2VpdmVBdHRhY2siLCJjcHVBdHRhY2siLCJjb21wdXRlckF0dGFjayIsIm1pc3NlZEF0dGFjayIsImFsbFNoaXBzU3VuayIsImdldFNoaXBDb29yZGluYXRlcyIsIl9jb29yZGluYXRlcyIsIl9zbGljZWRUb0FycmF5Iiwic2hpcENvb3JkaW5hdGVzIiwicHVzaCIsImdldEhpdFNoaXAiLCJfY29vcmRpbmF0ZXMyIiwic2hpcEhpdCIsInNoaXBDb29yZGluYXRlIiwidmFsaWRhdGVOYW1lIiwidmFsaWRhdGVTaGlwTGVuZ3RoIiwidmFsaWRhdGVPcmllbnRhdGlvbiIsInZhbGlkYXRlQ29vcmRpbmF0ZXMiLCJBcnJheSIsImlzQXJyYXkiLCJjb29yZGluYXRlIiwidmFsaWRhdGVPdmVybGFwIiwic2hpcENvb3JkaW5hdGUyIiwiZ2FtZWJvYXJkIiwic2hpcE9mZkJvYXJkIiwiX3NoaXBDb29yZGluYXRlIiwiZXZlcnkiLCJwb3NpdGlvbiIsImFpcmNyYWZ0Y2FycmllcjEiLCJhaXJjcmFmdGNhcnJpZXIyIiwiYWlyY3JhZnRjYXJyaWVyMyIsImFpcmNyYWZ0Y2FycmllcjQiLCJhaXJjcmFmdGNhcnJpZXI1IiwiYmF0dGxlc2hpcDEiLCJiYXR0bGVzaGlwMiIsImJhdHRsZXNoaXAzIiwiYmF0dGxlc2hpcDQiLCJjcnVpc2VyMSIsImNydWlzZXIyIiwiY3J1aXNlcjMiLCJkZXN0cm95ZXIxIiwiZGVzdHJveWVyMiIsImRlc3Ryb3llcjMiLCJzdWJtYXJpbmUxIiwic3VibWFyaW5lMiIsImJvYXQxIiwiYm9hdDIiLCJleHBsb3Npb24iLCJhaXJjcmFmdGNhcnJpZXJTaGlwIiwiYmF0dGxlc2hpcFNoaXAiLCJjcnVpc2VyU2hpcCIsInN1Ym1hcmluZVNoaXAiLCJkZXN0cm95ZXJTaGlwIiwiYm9hdFNoaXAiXSwic291cmNlUm9vdCI6IiJ9