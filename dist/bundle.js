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
/* harmony export */   handleRotateTextClick: () => (/* binding */ handleRotateTextClick),
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
function handleRotateTextClick() {
  var rotateText = document.getElementById('rotateText');
  rotateText.addEventListener('click', function () {
    // Simular la pulsación de la tecla "R" al hacer clic en el texto
    var event = new KeyboardEvent('keydown', {
      key: 'r'
    });
    document.dispatchEvent(event);
  });
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
            createAlert('success', 'Just hit a ship!, One more try till enemy move!');
          } else if (attack === 'doubleMiss') {
            cell.classList.add('miss');
            createAlert('none', 'Your torpedo just failed! also the enemyr missed!');
          } else if (attack === 'missAndHit') {
            cell.classList.add('miss');
            createAlert('danger', 'Your torpedo just failed! also the enemy hit a ship!');
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
          createAlert('you hit!', 'All ships placed, placing enemy`s ships');
          showAction('player', 'Waiting for enemy move', 'alert');
          showAction('enemy', 'Placing ships');
          // wait 3 second before placing computer ships (simulates thinking)
          setTimeout(function () {
            gameInstance.randomPlaceShips(gameInstance.computerBoard);
            updateCard(gameInstance.computerBoard, 'enemy');
            gameInstance.startGame();
            createAlert('success', 'All ships placed, start the war!');
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
        throw new Error('Placed off the board!!');
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

#rotateText {
  text-decoration: underline;
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sCAAsC;EACtC,mCAAmC;AACrC;;AAEA;EACE,wBAAwB;EACxB,wCAAwC;EACxC,oCAAoC;EACpC,SAAS;EACT,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,kDAAkD;AACpD;;AAEA;EACE,mDAAmD;AACrD;;AAEA;EACE,yCAAyC;EACzC,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,yDAAwD;AAC1D;;AAEA;EACE,0BAA0B;EAC1B,eAAe;AACjB","sourcesContent":[".board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.cell {\n  background-size: contain;\n  background-color: rgb(255 255 255 / 63%);\n  border: 1px solid rgb(255, 255, 255);\n  height: 0;\n  padding-bottom: 100%;\n  width: 100%;\n}\n\n.cell.has-background-danger {\n  background-color: rgba(255, 0, 0, 0.63) !important;\n}\n\n.cell.has-background-success {\n  background-color: rgba(30, 255, 0, 0.63) !important;\n}\n\n.cell:hover {\n  background-color: rgb(215, 215, 215, 0.5);\n  cursor: pointer;\n}\n\n.is-fullheight {\n  min-height: 100vh;\n}\n\n.tittle-tag > span {\n  font-family: monospace;\n  width: 135px;\n}\n\n.has-ocean {\n  background-image: url(./images/backgroundbatleships.png);\n}\n\n#rotateText {\n  text-decoration: underline;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
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
var alertMessage = 'Game started, place your ships <span id="rotateText">(Press R to rotate)</span>';
(0,_domManager_js__WEBPACK_IMPORTED_MODULE_1__.createAlert)('success', alertMessage);

// Add event listener to the "Press R to rotate" text
(0,_domManager_js__WEBPACK_IMPORTED_MODULE_1__.handleRotateTextClick)(); // Llama a la función handleRotateTextClick para manejar el evento de clic

(0,_domManager_js__WEBPACK_IMPORTED_MODULE_1__.startPlacing)(gameInstance, 'horizontal', 'Aircraftcarrier');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YmF0dGxlc2hpcHMvLi9zcmMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZG9tTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2dhbWVib2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gR2V0IHRoZSBBY3R1YWwgRE9NIGVsZW1lbnRzXG5jb25zdCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIxJyk7XG5jb25zdCBib2FyZDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyMicpO1xuY29uc3QgcGxheWVyQWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllckFjdGlvbicpO1xuY29uc3QgZW5lbXlBY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5lbXlBY3Rpb24nKTtcbmNvbnN0IHBsYWNpbmdTaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYWNpbmdTaGlwJyk7XG5jb25zdCBhbGVydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGVydCcpO1xuY29uc3QgZW5lbXlTdGF0dXNUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdHVzJykucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuXG4vLyBHZXQgdGhlIERPTSBlbGVtZW50cyBmcm9tIHRoZSBwbGF5ZXIgY2FyZHNcbmNvbnN0IHBsYXllcjFDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcjFDYXJkJyk7XG4vLyBBaXJjcmFmY2FycmllclxuY29uc3QgcGxheWVyMUFpcmNyYWZ0Y2FycmllciA9IHBsYXllcjFDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNhaXJjcmFmdGNhcnJpZXInKTtcbmNvbnN0IHBsYXllcjFBaXJjcmFmdGNhcnJpZXJRdWFudGl0eSA9IHBsYXllcjFBaXJjcmFmdGNhcnJpZXIucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBCYXR0bGVzaGlwXG5jb25zdCBwbGF5ZXIxQmF0dGxlc2hpcCA9IHBsYXllcjFDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNiYXR0bGVzaGlwJyk7XG5jb25zdCBwbGF5ZXIxQmF0dGxlc2hpcFF1YW50aXR5ID0gcGxheWVyMUJhdHRsZXNoaXAucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBTdWJtYXJpbmVcbmNvbnN0IHBsYXllcjFTdWJtYXJpbmUgPSBwbGF5ZXIxQ2FyZC5xdWVyeVNlbGVjdG9yKCcjc3VibWFyaW5lJyk7XG5jb25zdCBwbGF5ZXIxU3VibWFyaW5lUXVhbnRpdHkgPSBwbGF5ZXIxU3VibWFyaW5lLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gY3J1aXNlclxuY29uc3QgcGxheWVyMUNydWlzZXIgPSBwbGF5ZXIxQ2FyZC5xdWVyeVNlbGVjdG9yKCcjY3J1aXNlcicpO1xuY29uc3QgcGxheWVyMUNydWlzZXJRdWFudGl0eSA9IHBsYXllcjFDcnVpc2VyLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gRGVzdHJveWVyXG5jb25zdCBwbGF5ZXIxRGVzdHJveWVyID0gcGxheWVyMUNhcmQucXVlcnlTZWxlY3RvcignI2Rlc3Ryb3llcicpO1xuY29uc3QgcGxheWVyMURlc3Ryb3llclF1YW50aXR5ID0gcGxheWVyMURlc3Ryb3llci5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcbi8vIHBhdHJvbCBzaGlwXG5jb25zdCBwbGF5ZXIxQm9hdCA9IHBsYXllcjFDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNib2F0Jyk7XG5jb25zdCBwbGF5ZXIxQm9hdFF1YW50aXR5ID0gcGxheWVyMUJvYXQucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG5cbi8vIEdldCB0aGUgRE9NIGVsZW1lbnRzIGZyb20gdGhlIGNvbXB1dGVyIGNhcmRzXG5jb25zdCBwbGF5ZXIyQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXIyQ2FyZCcpO1xuLy8gQWlyY3JhZnRjYXJyaWVyXG5jb25zdCBwbGF5ZXIyQWlyY3JhZnRjYXJyaWVyID0gcGxheWVyMkNhcmQucXVlcnlTZWxlY3RvcignI2FpcmNyYWZ0Y2FycmllcicpO1xuY29uc3QgcGxheWVyMkFpcmNyYWZ0Y2FycmllclF1YW50aXR5ID0gcGxheWVyMkFpcmNyYWZ0Y2Fycmllci5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcbi8vIEJhdHRsZXNoaXBcbmNvbnN0IHBsYXllcjJCYXR0bGVzaGlwID0gcGxheWVyMkNhcmQucXVlcnlTZWxlY3RvcignI2JhdHRsZXNoaXAnKTtcbmNvbnN0IHBsYXllcjJCYXR0bGVzaGlwUXVhbnRpdHkgPSBwbGF5ZXIyQmF0dGxlc2hpcC5xdWVyeVNlbGVjdG9yKCcjcXVhbnRpdHknKTtcbi8vIFN1Ym1hcmluZVxuY29uc3QgcGxheWVyMlN1Ym1hcmluZSA9IHBsYXllcjJDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNzdWJtYXJpbmUnKTtcbmNvbnN0IHBsYXllcjJTdWJtYXJpbmVRdWFudGl0eSA9IHBsYXllcjJTdWJtYXJpbmUucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBjcnVpc2VyXG5jb25zdCBwbGF5ZXIyQ3J1aXNlciA9IHBsYXllcjJDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNjcnVpc2VyJyk7XG5jb25zdCBwbGF5ZXIyQ3J1aXNlclF1YW50aXR5ID0gcGxheWVyMkNydWlzZXIucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG4vLyBEZXN0cm95ZXJcbmNvbnN0IHBsYXllcjJEZXN0cm95ZXIgPSBwbGF5ZXIyQ2FyZC5xdWVyeVNlbGVjdG9yKCcjZGVzdHJveWVyJyk7XG5jb25zdCBwbGF5ZXIyRGVzdHJveWVyUXVhbnRpdHkgPSBwbGF5ZXIyRGVzdHJveWVyLnF1ZXJ5U2VsZWN0b3IoJyNxdWFudGl0eScpO1xuLy8gYm9hdCBzaGlwXG5jb25zdCBwbGF5ZXIyQm9hdCA9IHBsYXllcjJDYXJkLnF1ZXJ5U2VsZWN0b3IoJyNib2F0Jyk7XG5jb25zdCBwbGF5ZXIyQm9hdFF1YW50aXR5ID0gcGxheWVyMkJvYXQucXVlcnlTZWxlY3RvcignI3F1YW50aXR5Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERvbUVsZW1lbnRzKCkge1xuICByZXR1cm4ge1xuICAgIGJvYXJkLFxuICAgIGJvYXJkMixcbiAgICBwbGF5ZXJBY3Rpb24sXG4gICAgZW5lbXlBY3Rpb24sXG4gICAgcGxhY2luZ1NoaXAsXG4gICAgYWxlcnQsXG4gICAgZW5lbXlTdGF0dXNUYWcsXG4gICAgcGxheWVyMUNhcmQsXG4gICAgcGxheWVyMUFpcmNyYWZ0Y2FycmllcixcbiAgICBwbGF5ZXIxQWlyY3JhZnRjYXJyaWVyUXVhbnRpdHksXG4gICAgcGxheWVyMUJhdHRsZXNoaXAsXG4gICAgcGxheWVyMUJhdHRsZXNoaXBRdWFudGl0eSxcbiAgICBwbGF5ZXIxU3VibWFyaW5lLFxuICAgIHBsYXllcjFTdWJtYXJpbmVRdWFudGl0eSxcbiAgICBwbGF5ZXIxQ3J1aXNlcixcbiAgICBwbGF5ZXIxQ3J1aXNlclF1YW50aXR5LFxuICAgIHBsYXllcjFEZXN0cm95ZXIsXG4gICAgcGxheWVyMURlc3Ryb3llclF1YW50aXR5LFxuICAgIHBsYXllcjFCb2F0LFxuICAgIHBsYXllcjFCb2F0UXVhbnRpdHksXG4gICAgcGxheWVyMkNhcmQsXG4gICAgcGxheWVyMkFpcmNyYWZ0Y2FycmllcixcbiAgICBwbGF5ZXIyQWlyY3JhZnRjYXJyaWVyUXVhbnRpdHksXG4gICAgcGxheWVyMkJhdHRsZXNoaXAsXG4gICAgcGxheWVyMkJhdHRsZXNoaXBRdWFudGl0eSxcbiAgICBwbGF5ZXIyU3VibWFyaW5lLFxuICAgIHBsYXllcjJTdWJtYXJpbmVRdWFudGl0eSxcbiAgICBwbGF5ZXIyQ3J1aXNlcixcbiAgICBwbGF5ZXIyQ3J1aXNlclF1YW50aXR5LFxuICAgIHBsYXllcjJEZXN0cm95ZXIsXG4gICAgcGxheWVyMkRlc3Ryb3llclF1YW50aXR5LFxuICAgIHBsYXllcjJCb2F0LFxuICAgIHBsYXllcjJCb2F0UXVhbnRpdHksXG4gIH07XG59IiwiaW1wb3J0IHsgc2hpcHMsIGdldEFsbFNoaXBJbWFnZXMsIGdldEV4cGxvc2lvbkltYWdlIH0gZnJvbSAnLi9zaGlwcy5qcyc7XG5pbXBvcnQgZG9tRWxlbWVudHMgZnJvbSAnLi9kb21FbGVtZW50cy5qcyc7XG5pbXBvcnQgeyBib2FyZFZhbGlkYXRpb24gfSBmcm9tICcuL2dhbWVib2FyZEZhY3RvcnkuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWxlcnQodHlwZSwgbWVzc2FnZSkge1xuICBkb21FbGVtZW50cygpLmFsZXJ0LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibm90aWZpY2F0aW9uIGlzLSR7dHlwZX1cIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZVwiPjwvYnV0dG9uPlxuICAgICAgICA8cCBjbGFzcz1cImhhcy10ZXh0LXdlaWdodC1ib2xkXCI+JHttZXNzYWdlfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuICBjb25zdCBidXR0b24gPSBkb21FbGVtZW50cygpLmFsZXJ0LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge30pO1xuICAgIGRvbUVsZW1lbnRzKCkuYWxlcnQuaW5uZXJIVE1MID0gJyc7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhd0dyaWQodHlwZSA9ICdwbGF5ZXInKSB7XG4gIGNvbnN0IGJvYXJkID0gdHlwZSA9PT0gJ2VuZW15JyA/IGRvbUVsZW1lbnRzKCkuYm9hcmQyIDogZG9tRWxlbWVudHMoKS5ib2FyZDtcbiAgYm9hcmQuaW5uZXJIVE1MID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgLy8gYXNzaWduIHRoZSBpZCB0byBlYWNoIGNlbGxcbiAgICBjZWxsLnNldEF0dHJpYnV0ZSgnaWQnLCAnUDEnKTtcbiAgICAvLyBhc3NpZ24gdGhlIGNvb3JkaW5hdGVzIHRvIGVhY2ggY2VsbFxuICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXgnLCBpICUgMTApO1xuICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXknLCBNYXRoLmZsb29yKGkgLyAxMCkpO1xuXG4gICAgLy8gZGVsZXRlIGFueSBldmVudCBsaXN0ZW5lclxuICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7fSk7XG4gICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge30pO1xuICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHt9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVHcmlkKHR5cGUgPSAncGxheWVyJywgYm9hcmQpIHtcbiAgY29uc3QgZG9tQm9hcmQgPSB0eXBlID09PSAnZW5lbXknID8gZG9tRWxlbWVudHMoKS5ib2FyZDIgOiBkb21FbGVtZW50cygpLmJvYXJkO1xuICBjb25zdCB7IHNoaXBzIH0gPSBib2FyZDtcbiAgY29uc3QgeyBtaXNzZWRBdHRhY2tzIH0gPSBib2FyZDtcblxuICBpZiAodHlwZSA9PT0gJ3BsYXllcicpIHtcbiAgICAvLyBzaG93IHRoZSBzaGlwc1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9tQm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7c2hpcC5jb29yZGluYXRlc1tpXVswXX1cIl1bZGF0YS15PVwiJHtzaGlwLmNvb3JkaW5hdGVzW2ldWzFdfVwiXWApO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gZ2V0QWxsU2hpcEltYWdlcyhzaGlwLm5hbWUpO1xuICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWFnZXNbaV19KWA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyB1cGRhdGUgdGhlIG1pc3NlZCBhdHRhY2tzXG4gIG1pc3NlZEF0dGFja3MuZm9yRWFjaCgoY29vcmQpID0+IHtcbiAgICBjb25zdCBjZWxsID0gZG9tQm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7Y29vcmRbMF19XCJdW2RhdGEteT1cIiR7Y29vcmRbMV19XCJdYCk7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC1kYW5nZXInKTtcbiAgfSk7XG5cbiAgLy8gdXBkYXRlIHRoZSBoaXQgYXR0YWNrc1xuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcC5oaXRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICBjb25zdCBjZWxsID0gZG9tQm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEteD1cIiR7Y29vcmRbMF19XCJdW2RhdGEteT1cIiR7Y29vcmRbMV19XCJdYCk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3MnKTtcbiAgICAgIGlmICh0eXBlID09PSAnZW5lbXknKSB7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2dldEV4cGxvc2lvbkltYWdlKCl9KWA7XG4gICAgICB9XG4gICAgICAvLyBpZiBzaGlwIGlzIHN1bmsgc28gYWRkIHRoZSBmdWxsIGltYWdlXG4gICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3MnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC1zdWNjZXNzLWRhcmsnKTtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0gZ2V0QWxsU2hpcEltYWdlcyhzaGlwLm5hbWUpO1xuICAgICAgICBjb25zdCBhY3R1YWxTaGlwUGFydCA9IHNoaXAuY29vcmRpbmF0ZXNcbiAgICAgICAgICAuZmluZEluZGV4KChzaGlwQ29vcmQpID0+IHNoaXBDb29yZFswXSA9PT0gY29vcmRbMF0gJiYgc2hpcENvb3JkWzFdID09PSBjb29yZFsxXSk7XG4gICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlc1thY3R1YWxTaGlwUGFydF19KWA7XG4gICAgICAgIC8vIHJvdGF0ZSB0byB0aGUgY29ycmVjdCBvcmllbnRhdGlvblxuICAgICAgICBjb25zdCBhY3R1YWxPcmllbnRhdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICBpZiAoc2hpcC5jb29yZGluYXRlc1swXVswXSA9PT0gc2hpcC5jb29yZGluYXRlc1sxXVswXSkge1xuICAgICAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChhY3R1YWxPcmllbnRhdGlvbigpID09PSAndmVydGljYWwnKSB7XG4gICAgICAgICAgY2VsbC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDkwZGVnKSc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNhcmQoYm9hcmQsIHR5cGUgPSAnUGxheWVyJykge1xuICBjb25zdCBhaXJjcmFmdGNhcnJpZXIgPSBib2FyZC5zaGlwcy5maWx0ZXIoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gJ0FpcmNyYWZ0Y2FycmllcicpO1xuICBjb25zdCBiYXR0bGVzaGlwID0gYm9hcmQuc2hpcHMuZmlsdGVyKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09ICdCYXR0bGVzaGlwJyk7XG4gIGNvbnN0IGNydWlzZXIgPSBib2FyZC5zaGlwcy5maWx0ZXIoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gJ0NydWlzZXInKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gYm9hcmQuc2hpcHMuZmlsdGVyKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09ICdTdWJtYXJpbmUnKTtcbiAgY29uc3QgZGVzdHJveWVyID0gYm9hcmQuc2hpcHMuZmlsdGVyKChzaGlwKSA9PiBzaGlwLm5hbWUgPT09ICdEZXN0cm95ZXInKTtcbiAgY29uc3QgYm9hdCA9IGJvYXJkLnNoaXBzLmZpbHRlcigoc2hpcCkgPT4gc2hpcC5uYW1lID09PSAnQm9hdCcpO1xuXG4gIGxldCBzaGlwcyA9IFtdO1xuICBpZiAodHlwZSA9PT0gJ1BsYXllcicpIHtcbiAgICBzaGlwcyA9IFtcbiAgICAgIFthaXJjcmFmdGNhcnJpZXIsIGRvbUVsZW1lbnRzKCkucGxheWVyMUFpcmNyYWZ0Y2FycmllclF1YW50aXR5XSxcbiAgICAgIFtiYXR0bGVzaGlwLCBkb21FbGVtZW50cygpLnBsYXllcjFCYXR0bGVzaGlwUXVhbnRpdHldLFxuICAgICAgW2NydWlzZXIsIGRvbUVsZW1lbnRzKCkucGxheWVyMUNydWlzZXJRdWFudGl0eV0sXG4gICAgICBbc3VibWFyaW5lLCBkb21FbGVtZW50cygpLnBsYXllcjFTdWJtYXJpbmVRdWFudGl0eV0sXG4gICAgICBbZGVzdHJveWVyLCBkb21FbGVtZW50cygpLnBsYXllcjFEZXN0cm95ZXJRdWFudGl0eV0sXG4gICAgICBbYm9hdCwgZG9tRWxlbWVudHMoKS5wbGF5ZXIxQm9hdFF1YW50aXR5XSxcbiAgICBdO1xuICB9IGVsc2Uge1xuICAgIHNoaXBzID0gW1xuICAgICAgW2FpcmNyYWZ0Y2FycmllciwgZG9tRWxlbWVudHMoKS5wbGF5ZXIyQWlyY3JhZnRjYXJyaWVyUXVhbnRpdHldLFxuICAgICAgW2JhdHRsZXNoaXAsIGRvbUVsZW1lbnRzKCkucGxheWVyMkJhdHRsZXNoaXBRdWFudGl0eV0sXG4gICAgICBbY3J1aXNlciwgZG9tRWxlbWVudHMoKS5wbGF5ZXIyQ3J1aXNlclF1YW50aXR5XSxcbiAgICAgIFtzdWJtYXJpbmUsIGRvbUVsZW1lbnRzKCkucGxheWVyMlN1Ym1hcmluZVF1YW50aXR5XSxcbiAgICAgIFtkZXN0cm95ZXIsIGRvbUVsZW1lbnRzKCkucGxheWVyMkRlc3Ryb3llclF1YW50aXR5XSxcbiAgICAgIFtib2F0LCBkb21FbGVtZW50cygpLnBsYXllcjJCb2F0UXVhbnRpdHldLFxuICAgIF07XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChzaGlwc1tpXVswXS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNoaXBzW2ldWzFdLmlubmVySFRNTCA9ICcwJztcbiAgICAgIHNoaXBzW2ldWzFdLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy10ZXh0LXN1Y2Nlc3MnKTtcbiAgICAgIHNoaXBzW2ldWzFdLmNsYXNzTGlzdC5hZGQoJ2hhcy10ZXh0LWRhbmdlcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdW5rZWQgPSBzaGlwc1tpXVswXVswXS5pc1N1bmsoKTtcbiAgICAgIGlmIChzdW5rZWQpIHtcbiAgICAgICAgc2hpcHNbaV1bMV0uaW5uZXJIVE1MID0gJzAnO1xuICAgICAgICBzaGlwc1tpXVsxXS5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtdGV4dC1zdWNjZXNzJyk7XG4gICAgICAgIHNoaXBzW2ldWzFdLmNsYXNzTGlzdC5hZGQoJ2hhcy10ZXh0LWRhbmdlcicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hpcHNbaV1bMV0uaW5uZXJIVE1MID0gJzEnO1xuICAgICAgICBzaGlwc1tpXVsxXS5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtdGV4dC1kYW5nZXInKTtcbiAgICAgICAgc2hpcHNbaV1bMV0uY2xhc3NMaXN0LmFkZCgnaGFzLXRleHQtc3VjY2VzcycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUGxhY2luZ1NoaXAoc2hpcE5hbWUpIHtcbiAgaWYgKHNoaXBOYW1lID09PSAnbm9uZScpIHtcbiAgICBkb21FbGVtZW50cygpLnBsYWNpbmdTaGlwLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBzaGlwID0gc2hpcHMuZmluZCgoc2hpcCkgPT4gc2hpcC5uYW1lID09PSBzaGlwTmFtZSk7XG4gIGRvbUVsZW1lbnRzKCkucGxhY2luZ1NoaXAuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XG4gIGRvbUVsZW1lbnRzKCkucGxhY2luZ1NoaXAuaW5uZXJIVE1MID0gYFxuICAgIDxpbWcgc3JjPVwiJHtzaGlwLmZ1bGxJbWFnZX1cIiBhbHQ9XCIke3NoaXBOYW1lfVwiIHdpZHRoPVwiJHtzaGlwLnNpemUgKiAyMH1cIj5cbiAgYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBY3Rpb24odHlwZSwgbWVzc2FnZSwgY29sb3IgPSAnZ3JlZW4nKSB7XG4gIGlmICh0eXBlID09PSAncGxheWVyJykge1xuICAgIGRvbUVsZW1lbnRzKCkucGxheWVyQWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWhpZGRlbicpO1xuICAgIGRvbUVsZW1lbnRzKCkucGxheWVyQWN0aW9uLmlubmVySFRNTCA9IG1lc3NhZ2U7XG4gICAgaWYgKGNvbG9yID09PSAnZ3JlZW4nKSB7XG4gICAgICBkb21FbGVtZW50cygpLnBsYXllckFjdGlvbi5jbGFzc0xpc3QuYWRkKCdpcy1zdWNjZXNzJyk7XG4gICAgICBkb21FbGVtZW50cygpLnBsYXllckFjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdpcy13YXJuaW5nJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbUVsZW1lbnRzKCkucGxheWVyQWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2lzLXdhcm5pbmcnKTtcbiAgICAgIGRvbUVsZW1lbnRzKCkucGxheWVyQWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXN1Y2Nlc3MnKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2VuZW15Jykge1xuICAgIGRvbUVsZW1lbnRzKCkuZW5lbXlBY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaXMtaGlkZGVuJyk7XG4gICAgZG9tRWxlbWVudHMoKS5lbmVteUFjdGlvbi5pbm5lckhUTUwgPSBtZXNzYWdlO1xuICAgIGlmIChjb2xvciA9PT0gJ2dyZWVuJykge1xuICAgICAgZG9tRWxlbWVudHMoKS5lbmVteUFjdGlvbi5jbGFzc0xpc3QuYWRkKCdpcy1zdWNjZXNzJyk7XG4gICAgICBkb21FbGVtZW50cygpLmVuZW15QWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXdhcm5pbmcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tRWxlbWVudHMoKS5lbmVteUFjdGlvbi5jbGFzc0xpc3QuYWRkKCdpcy13YXJuaW5nJyk7XG4gICAgICBkb21FbGVtZW50cygpLmVuZW15QWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXN1Y2Nlc3MnKTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVSb3RhdGVUZXh0Q2xpY2soKSB7XG4gIGNvbnN0IHJvdGF0ZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm90YXRlVGV4dCcpO1xuICByb3RhdGVUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIFNpbXVsYXIgbGEgcHVsc2FjacOzbiBkZSBsYSB0ZWNsYSBcIlJcIiBhbCBoYWNlciBjbGljIGVuIGVsIHRleHRvXG4gICAgY29uc3QgZXZlbnQgPSBuZXcgS2V5Ym9hcmRFdmVudCgna2V5ZG93bicsIHtcbiAgICAgIGtleTogJ3InLFxuICAgIH0pO1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9KTtcbn0gIFxuZnVuY3Rpb24gY2hlY2tWYWxpZE1vdmUoYm9hcmQsIGNlbGwsIG9yaWVudGF0aW9uLCBzaGlwTGVuZ3RoLCBzaGlwTmFtZSkge1xuICBjb25zdCB4ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpLCAxMCk7XG4gIGNvbnN0IHkgPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS15JyksIDEwKTtcbiAgY29uc3QgY29vcmRzID0gW3gsIHldO1xuICB0cnkge1xuICAgIGJvYXJkVmFsaWRhdGlvbihzaGlwTmFtZSwgc2hpcExlbmd0aCwgY29vcmRzLCBvcmllbnRhdGlvbiwgYm9hcmQuc2hpcHMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBzZXRTaGlwSW1hZ2UoYm9hcmQsIGNlbGwsIHNoaXBJbWFnZXMsIG9yaWVudGF0aW9uLCBzaGlwTGVuZ3RoLCBzaGlwTmFtZSkge1xuICBjb25zdCB4ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpLCAxMCk7XG4gIGNvbnN0IHkgPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS15JyksIDEwKTtcbiAgY29uc3QgdmFsaWRNb3ZlID0gY2hlY2tWYWxpZE1vdmUoYm9hcmQsIGNlbGwsIG9yaWVudGF0aW9uLCBzaGlwTGVuZ3RoLCBzaGlwTmFtZSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgY2VsbFRvQ2hhbmdlID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJ1xuICAgICAgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjUDFbZGF0YS14PVwiJHt4ICsgaX1cIl1bZGF0YS15PVwiJHt5fVwiXWApXG4gICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNQMVtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eSArIGl9XCJdYCk7XG4gICAgaWYgKGNlbGxUb0NoYW5nZSkge1xuICAgICAgaWYgKHZhbGlkTW92ZSkge1xuICAgICAgICBjZWxsVG9DaGFuZ2Uuc3R5bGUudHJhbnNmb3JtID0gb3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/ICdyb3RhdGUoMGRlZyknIDogJ3JvdGF0ZSg5MGRlZyknO1xuICAgICAgICBjZWxsVG9DaGFuZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3NoaXBJbWFnZXNbaV19KWA7XG4gICAgICAgIGNlbGxUb0NoYW5nZS5jbGFzc0xpc3QuYWRkKCdoYXMtYmFja2dyb3VuZC1zdWNjZXNzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjZWxsVG9DaGFuZ2UuY2xhc3NMaXN0LmFkZCgnaGFzLWJhY2tncm91bmQtZGFuZ2VyJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNoaXBJbWFnZShjZWxsLCBvcmllbnRhdGlvbiwgc2hpcExlbmd0aCkge1xuICBjb25zdCB4ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpLCAxMCk7XG4gIGNvbnN0IHkgPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS15JyksIDEwKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBjZWxsVG9DaGFuZ2UgPSBvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnXG4gICAgICA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNQMVtkYXRhLXg9XCIke3ggKyBpfVwiXVtkYXRhLXk9XCIke3l9XCJdYClcbiAgICAgIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI1AxW2RhdGEteD1cIiR7eH1cIl1bZGF0YS15PVwiJHt5ICsgaX1cIl1gKTtcbiAgICBpZiAoY2VsbFRvQ2hhbmdlKSB7XG4gICAgICBpZiAoIWNlbGxUb0NoYW5nZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSkge1xuICAgICAgICBjZWxsVG9DaGFuZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG4gICAgICB9XG4gICAgICBjZWxsVG9DaGFuZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLWJhY2tncm91bmQtc3VjY2VzcycpO1xuICAgICAgY2VsbFRvQ2hhbmdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1iYWNrZ3JvdW5kLWRhbmdlcicpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0cnlQbGFjZVNoaXAoY2VsbCwgb3JpZW50YXRpb24sIHNoaXBOYW1lLCBzaGlwTGVuZ3RoLCBib2FyZCkge1xuICBjb25zdCB4ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpLCAxMCk7XG4gIGNvbnN0IHkgPSBwYXJzZUludChjZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS15JyksIDEwKTtcbiAgY29uc3QgdmFsaWRNb3ZlID0gY2hlY2tWYWxpZE1vdmUoYm9hcmQsIGNlbGwsIG9yaWVudGF0aW9uLCBzaGlwTGVuZ3RoLCBzaGlwTmFtZSk7XG4gIGlmICh2YWxpZE1vdmUpIHtcbiAgICBib2FyZC5wbGFjZVNoaXAoc2hpcE5hbWUsIHNoaXBMZW5ndGgsIFt4LCB5XSwgb3JpZW50YXRpb24pO1xuICAgIHVwZGF0ZUNhcmQoYm9hcmQpO1xuICAgIHVwZGF0ZUdyaWQoJ3BsYXllcicsIGJvYXJkKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHN0b3BQbGFjaW5nKCkge1xuICBjb25zdCBjZWxscyA9IGRvbUVsZW1lbnRzKCkuYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcblxuICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgaWYgKCFjZWxsLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpKSB7XG4gICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuICAgIH1cbiAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3MnKTtcbiAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1iYWNrZ3JvdW5kLWRhbmdlcicpO1xuICAgIGNlbGwucmVwbGFjZVdpdGgoY2VsbC5jbG9uZU5vZGUodHJ1ZSkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmVzZXRCdXR0b24oKSB7XG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdpcy1kYW5nZXInLCAnaXMtbGFyZ2UnLCAnaXMtZnVsbHdpZHRoJyk7XG4gIHJlc2V0QnV0dG9uLmlubmVySFRNTCA9ICdSZXNldCBHYW1lJztcbiAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KTtcbiAgZG9tRWxlbWVudHMoKS5hbGVydC5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG59XG5cbmZ1bmN0aW9uIGVuZEdhbWUod2lubmVyKSB7XG4gIGNyZWF0ZUFsZXJ0KCdzdWNjZXNzJywgYCR7d2lubmVyfWApO1xuICBkb21FbGVtZW50cygpLmJvYXJkLmNsYXNzTGlzdC5hZGQoJ2lzLWhpZGRlbicpO1xuICBkb21FbGVtZW50cygpLmJvYXJkMi5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgZG9tRWxlbWVudHMoKS5wbGFjaW5nU2hpcC5jbGFzc0xpc3QuYWRkKCdpcy1oaWRkZW4nKTtcbiAgZG9tRWxlbWVudHMoKS5wbGF5ZXJBY3Rpb24uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gIGRvbUVsZW1lbnRzKCkuZW5lbXlBY3Rpb24uY2xhc3NMaXN0LmFkZCgnaXMtaGlkZGVuJyk7XG4gIGNyZWF0ZVJlc2V0QnV0dG9uKCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0QXR0YWNraW5nKGdhbWVJbnN0YW5jZSkge1xuICBjb25zdCBjZWxscyA9IGRvbUVsZW1lbnRzKCkuYm9hcmQyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG4gIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBpZiAoIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSAmJiAhY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSkge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgeCA9IHBhcnNlSW50KGNlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLXgnKSwgMTApO1xuICAgICAgICBjb25zdCB5ID0gcGFyc2VJbnQoY2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEteScpLCAxMCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgYXR0YWNrID0gZ2FtZUluc3RhbmNlLnBsYXllckF0dGFjayh4LCB5KTtcbiAgICAgICAgICBpZiAoYXR0YWNrID09PSAnaGl0Jykge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgIGNyZWF0ZUFsZXJ0KCdzdWNjZXNzJywgJ0p1c3QgaGl0IGEgc2hpcCEsIE9uZSBtb3JlIHRyeSB0aWxsIGVuZW15IG1vdmUhJyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRhY2sgPT09ICdkb3VibGVNaXNzJykge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICBjcmVhdGVBbGVydCgnbm9uZScsICdZb3VyIHRvcnBlZG8ganVzdCBmYWlsZWQhIGFsc28gdGhlIGVuZW15ciBtaXNzZWQhJyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChhdHRhY2sgPT09ICdtaXNzQW5kSGl0Jykge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICBjcmVhdGVBbGVydCgnZGFuZ2VyJywgJ1lvdXIgdG9ycGVkbyBqdXN0IGZhaWxlZCEgYWxzbyB0aGUgZW5lbXkgaGl0IGEgc2hpcCEnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdXBkYXRlR3JpZCgnZW5lbXknLCBnYW1lSW5zdGFuY2UuY29tcHV0ZXJCb2FyZCk7XG4gICAgICAgICAgdXBkYXRlR3JpZCgncGxheWVyJywgZ2FtZUluc3RhbmNlLnBsYXllckJvYXJkKTtcbiAgICAgICAgICB1cGRhdGVDYXJkKGdhbWVJbnN0YW5jZS5jb21wdXRlckJvYXJkLCAnZW5lbXknKTtcbiAgICAgICAgICB1cGRhdGVDYXJkKGdhbWVJbnN0YW5jZS5wbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgaWYgKGdhbWVJbnN0YW5jZS5nYW1lRW5kKCkpIHtcbiAgICAgICAgICAgIGVuZEdhbWUoZ2FtZUluc3RhbmNlLmdhbWVFbmQoKSk7XG4gICAgICAgICAgICBnYW1lSW5zdGFuY2UucmVzZXRHYW1lKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY3JlYXRlQWxlcnQoJ3dhcm5pbmcnLCBlLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge30pO1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHt9KTtcbiAgfSk7XG59XG5cbmxldCBwbGFjaW5nID0gdHJ1ZTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0UGxhY2luZyhnYW1lSW5zdGFuY2UsIG9yaWVudGF0aW9uLCBzaGlwTmFtZSkge1xuICB1cGRhdGVDYXJkKGdhbWVJbnN0YW5jZS5jb21wdXRlckJvYXJkLCAnZW5lbXknKTtcblxuICBjb25zdCBjZWxscyA9IGRvbUVsZW1lbnRzKCkuYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbiAgY29uc3Qgc2hpcEltYWdlcyA9IGdldEFsbFNoaXBJbWFnZXMoc2hpcE5hbWUpO1xuICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcEltYWdlcy5sZW5ndGg7XG5cbiAgY29uc3Qgc2hpcFR5cGVzID0gWydBaXJjcmFmdGNhcnJpZXInLCAnQmF0dGxlc2hpcCcsICdDcnVpc2VyJywgJ1N1Ym1hcmluZScsICdEZXN0cm95ZXInLCAnQm9hdCddO1xuICBjb25zdCBuZXh0U2hpcCA9IHNoaXBUeXBlcy5pbmRleE9mKHNoaXBOYW1lKSArIDE7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAncicgJiYgcGxhY2luZykge1xuICAgICAgc3RvcFBsYWNpbmcoKTtcbiAgICAgIHN0YXJ0UGxhY2luZyhnYW1lSW5zdGFuY2UsIG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnLCBzaGlwTmFtZSk7XG4gICAgfVxuICB9KTtcblxuICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gc2V0U2hpcEltYWdlKGdhbWVJbnN0YW5jZS5wbGF5ZXJCb2FyZCwgY2VsbCwgc2hpcEltYWdlcywgb3JpZW50YXRpb24sIHNoaXBMZW5ndGgsIHNoaXBOYW1lKSk7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gcmVtb3ZlU2hpcEltYWdlKGNlbGwsIG9yaWVudGF0aW9uLCBzaGlwTGVuZ3RoKSk7XG4gICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHBsYWNlZCA9IHRyeVBsYWNlU2hpcChjZWxsLCBvcmllbnRhdGlvbiwgc2hpcE5hbWUsIHNoaXBMZW5ndGgsXG4gICAgICAgIGdhbWVJbnN0YW5jZS5wbGF5ZXJCb2FyZCk7XG4gICAgICBpZiAocGxhY2VkKSB7XG4gICAgICAgIHN0b3BQbGFjaW5nKCk7XG4gICAgICAgIGlmIChuZXh0U2hpcCA8IHNoaXBUeXBlcy5sZW5ndGgpIHtcbiAgICAgICAgICB1cGRhdGVQbGFjaW5nU2hpcChzaGlwVHlwZXNbbmV4dFNoaXBdKTtcbiAgICAgICAgICBzdGFydFBsYWNpbmcoZ2FtZUluc3RhbmNlLCAnaG9yaXpvbnRhbCcsIHNoaXBUeXBlc1tuZXh0U2hpcF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYWNpbmcgPSBmYWxzZTtcbiAgICAgICAgICB1cGRhdGVQbGFjaW5nU2hpcCgnbm9uZScpO1xuICAgICAgICAgIGNyZWF0ZUFsZXJ0KCd5b3UgaGl0IScsICdBbGwgc2hpcHMgcGxhY2VkLCBwbGFjaW5nIGVuZW15YHMgc2hpcHMnKTtcbiAgICAgICAgICBzaG93QWN0aW9uKCdwbGF5ZXInLCAnV2FpdGluZyBmb3IgZW5lbXkgbW92ZScsICdhbGVydCcpO1xuICAgICAgICAgIHNob3dBY3Rpb24oJ2VuZW15JywgJ1BsYWNpbmcgc2hpcHMnKTtcbiAgICAgICAgICAvLyB3YWl0IDMgc2Vjb25kIGJlZm9yZSBwbGFjaW5nIGNvbXB1dGVyIHNoaXBzIChzaW11bGF0ZXMgdGhpbmtpbmcpXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBnYW1lSW5zdGFuY2UucmFuZG9tUGxhY2VTaGlwcyhnYW1lSW5zdGFuY2UuY29tcHV0ZXJCb2FyZCk7XG4gICAgICAgICAgICB1cGRhdGVDYXJkKGdhbWVJbnN0YW5jZS5jb21wdXRlckJvYXJkLCAnZW5lbXknKTtcbiAgICAgICAgICAgIGdhbWVJbnN0YW5jZS5zdGFydEdhbWUoKTtcbiAgICAgICAgICAgIGNyZWF0ZUFsZXJ0KCdzdWNjZXNzJywgJ0FsbCBzaGlwcyBwbGFjZWQsIHN0YXJ0IHRoZSB3YXIhJyk7XG4gICAgICAgICAgICBzaG93QWN0aW9uKCdwbGF5ZXInLCAnQXR0YWNrIHRoZSBlbmVteSEnKTtcbiAgICAgICAgICAgIHNob3dBY3Rpb24oJ2VuZW15JywgJ1dhaXRpbmcgZm9yIGF0dGFjaycsICdhbGVydCcpO1xuICAgICAgICAgICAgc3RhcnRBdHRhY2tpbmcoZ2FtZUluc3RhbmNlKTtcbiAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgfSIsImltcG9ydCB7IGdhbWVib2FyZEZhY3RvcnkgfSBmcm9tICcuL2dhbWVib2FyZEZhY3RvcnkuanMnOyBcbmltcG9ydCBjcmVhdGVTaGlwIGZyb20gJy4vc2hpcEZhY3RvcnkuanMnOyBcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBnYW1lID0ge1xuICAgIGFjdHVhbFBsYXllcjogMSxcbiAgICBnYW1lU3RhcnRlZDogZmFsc2UsXG4gICAgcGxheWVyQm9hcmQ6IGdhbWVib2FyZEZhY3RvcnkoKSxcbiAgICBjb21wdXRlckJvYXJkOiBnYW1lYm9hcmRGYWN0b3J5KCksXG4gICAgY2hhbmdlUGxheWVyKCkge1xuICAgICAgdGhpcy5hY3R1YWxQbGF5ZXIgPSB0aGlzLmFjdHVhbFBsYXllciA9PT0gMSA/IDIgOiAxO1xuICAgIH0sXG4gICAgcmFuZG9tUGxhY2VTaGlwcyhib2FyZCkge1xuICAgICAgY29uc3Qgc2hpcHMgPSBbXG4gICAgICAgIHsgbmFtZTogJ0FpcmNyYWZ0Y2FycmllcicsIHZhbHVlOiBjcmVhdGVTaGlwKDUpIH0sXG4gICAgICAgIHsgbmFtZTogJ0JhdHRsZXNoaXAnLCB2YWx1ZTogY3JlYXRlU2hpcCg0KSB9LFxuICAgICAgICB7IG5hbWU6ICdDcnVpc2VyJywgdmFsdWU6IGNyZWF0ZVNoaXAoMykgfSxcbiAgICAgICAgeyBuYW1lOiAnU3VibWFyaW5lJywgdmFsdWU6IGNyZWF0ZVNoaXAoMikgfSxcbiAgICAgICAgeyBuYW1lOiAnRGVzdHJveWVyJywgdmFsdWU6IGNyZWF0ZVNoaXAoMikgfSxcbiAgICAgICAgeyBuYW1lOiAnQm9hdCcsIHZhbHVlOiBjcmVhdGVTaGlwKDIpIH0sXG4gICAgICBdO1xuICAgICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gJyc7XG4gICAgICAgIGxldCB2YWxpZFNoaXAgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCF2YWxpZFNoaXApIHtcbiAgICAgICAgICBjb29yZGluYXRlcyA9IFtcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgICBdO1xuICAgICAgICAgIG9yaWVudGF0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwLm5hbWUsIHNoaXAudmFsdWUubGVuZ3RoLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgdmFsaWRTaGlwID0gdHJ1ZTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdmFsaWRTaGlwID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHN0YXJ0R2FtZSgpIHtcbiAgICAgIGlmICh0aGlzLnBsYXllckJvYXJkLnNoaXBzLmxlbmd0aCA+PSA2ICYmIHRoaXMuY29tcHV0ZXJCb2FyZC5zaGlwcy5sZW5ndGggPj0gNikge1xuICAgICAgICB0aGlzLmdhbWVTdGFydGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxhY2UgYWxsIHlvdXIgc2hpcHMnKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNoZWNrVmFsaWRBdHRhY2soeCwgeSkge1xuICAgICAgY29uc3QgY29vcmRzID0gW3gsIHldO1xuICAgICAgaWYgKCF0aGlzLmdhbWVTdGFydGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gc3RhcnQgdGhlIGdhbWUnKTtcbiAgICAgIH1cbiAgICAgIGlmICh4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nvb3JkaW5hdGVzIGFyZSBub3QgdmFsaWQnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1pc3NlcyA9IHRoaXMuY29tcHV0ZXJCb2FyZC5taXNzZWRBdHRhY2tzO1xuICAgICAgY29uc3QgbWlzc2VkID0gbWlzc2VzLnNvbWUoKG1pc3MpID0+IG1pc3NbMF0gPT09IGNvb3Jkc1swXSAmJiBtaXNzWzFdID09PSBjb29yZHNbMV0pO1xuXG4gICAgICBjb25zdCBoaXRzID0gdGhpcy5jb21wdXRlckJvYXJkLnNoaXBzLm1hcCgoc2hpcCkgPT4gc2hpcC5oaXRzKTtcbiAgICAgIGNvbnN0IGhpdHRlZCA9IGhpdHMuc29tZSgoaGl0KSA9PiBoaXQuc29tZSgoaGl0Q29vcmRzKSA9PiBoaXRDb29yZHNbMF0gPT09IGNvb3Jkc1swXSAmJiBoaXRDb29yZHNbMV0gPT09IGNvb3Jkc1sxXSkpO1xuICAgICAgaWYgKG1pc3NlZCB8fCBoaXR0ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgYWxyZWFkeSBhdHRhY2tlZCB0aGlzIGNvb3JkaW5hdGVzJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIHBsYXllckF0dGFjayh4LCB5KSB7XG4gICAgICBpZiAodGhpcy5jaGVja1ZhbGlkQXR0YWNrKHgsIHkpKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKFt4LCB5XSk7XG4gICAgICAgIGlmICh0aGlzLmNvbXB1dGVyQm9hcmQuc2hpcHMuc29tZSgoc2hpcCkgPT4gc2hpcC5oaXRzLnNvbWUoKGhpdCkgPT4gaGl0WzBdID09PSB4ICYmIGhpdFsxXSA9PT0geSkpKSB7XG4gICAgICAgICAgcmV0dXJuICdoaXQnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKCk7XG4gICAgICAgIGNvbnN0IGNwdUF0dGFjayA9IHRoaXMuY29tcHV0ZXJBdHRhY2soKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VQbGF5ZXIoKTtcbiAgICAgICAgaWYgKGNwdUF0dGFjayA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgcmV0dXJuICdkb3VibGVNaXNzJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuICdtaXNzQW5kSGl0JztcbiAgICB9LFxuICAgIGNvbXB1dGVyQXR0YWNrKGhpdHMgPSAwKSB7XG4gICAgICBpZiAoIXRoaXMuZ2FtZVN0YXJ0ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbmVlZCB0byBzdGFydCB0aGUgZ2FtZScpO1xuICAgICAgfVxuICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgICAgXTtcbiAgICAgIGlmICh0aGlzLnBsYXllckJvYXJkLm1pc3NlZEF0dGFja3Muc29tZSgobWlzc2VkQXR0YWNrKSA9PiBtaXNzZWRBdHRhY2tbMF0gPT09IGNvb3JkaW5hdGVzWzBdICYmIG1pc3NlZEF0dGFja1sxXSA9PT0gY29vcmRpbmF0ZXNbMV0pKSB7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJBdHRhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gICAgICAgIGlmICh0aGlzLnBsYXllckJvYXJkLnNoaXBzLnNvbWUoKHNoaXApID0+IHNoaXAuaGl0cy5zb21lKChoaXQpID0+IGhpdFswXSA9PT0gY29vcmRpbmF0ZXNbMF0gJiYgaGl0WzFdID09PSBjb29yZGluYXRlc1sxXSkpKSB7XG4gICAgICAgICAgdGhpcy5jb21wdXRlckF0dGFjayhoaXRzICsgMSk7XG4gICAgICAgICAgcmV0dXJuICdoaXQnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKCk7XG4gICAgICB9XG4gICAgICBpZiAoaGl0cyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gJ21pc3MnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGhpdHM7XG4gICAgfSxcbiAgICBnYW1lRW5kKCkge1xuICAgICAgaWYgKCF0aGlzLmdhbWVTdGFydGVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gc3RhcnQgdGhlIGdhbWUnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnBsYXllckJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiAnQ29tcHV0ZXIgd2lucyc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb21wdXRlckJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIHJldHVybiAnUGxheWVyIHdpbnMnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG4gICAgcmVzZXRHYW1lKCkge1xuICAgICAgdGhpcy5hY3R1YWxQbGF5ZXIgPSAxO1xuICAgICAgdGhpcy5nYW1lU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5wbGF5ZXJCb2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKTtcbiAgICAgIHRoaXMuY29tcHV0ZXJCb2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKTtcbiAgICB9LFxuICB9O1xuICByZXR1cm4gZ2FtZTtcbn07XG4iLCJpbXBvcnQgY3JlYXRlU2hpcCBmcm9tICcuL3NoaXBGYWN0b3J5LmpzJztcblxuLy8gZnVuY3Rpb24gdG8gZ2V0IHRoZSBjb29yZGluYXRlcyBvZiBhIHNoaXBcbmZ1bmN0aW9uIGdldFNoaXBDb29yZGluYXRlcyhjb29yZGluYXRlcywgbGVuZ3RoLCBvcmllbnRhdGlvbikge1xuICBjb25zdCBbeCwgeV0gPSBjb29yZGluYXRlcztcbiAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW3ggKyBpLCB5XSk7XG4gICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgc2hpcENvb3JkaW5hdGVzLnB1c2goW3gsIHkgKyBpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzaGlwQ29vcmRpbmF0ZXM7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIGdldCB0aGUgc2hpcCB0aGF0IHdhcyBoaXRcbmZ1bmN0aW9uIGdldEhpdFNoaXAoY29vcmRpbmF0ZXMsIHNoaXBzKSB7XG4gIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGVzO1xuICBsZXQgc2hpcEhpdCA9IG51bGw7XG4gIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKHNoaXBDb29yZGluYXRlKSA9PiB7XG4gICAgICBpZiAoc2hpcENvb3JkaW5hdGVbMF0gPT09IHggJiYgc2hpcENvb3JkaW5hdGVbMV0gPT09IHkpIHtcbiAgICAgICAgc2hpcEhpdCA9IHNoaXA7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gc2hpcEhpdDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVOYW1lKG5hbWUpIHtcbiAgLy8gQWlyY3JhZnRjYXJyaWVyLCBCYXR0bGVzaGlwLCBDcnVpc2VyLCBTdWJtYXJpbmUsIERlc3Ryb3llciwgQm9hdFxuICBpZiAobmFtZSAhPT0gJ0FpcmNyYWZ0Y2FycmllcicgJiYgbmFtZSAhPT0gJ0JhdHRsZXNoaXAnICYmIG5hbWUgIT09ICdDcnVpc2VyJ1xuICAmJiBuYW1lICE9PSAnU3VibWFyaW5lJyAmJiBuYW1lICE9PSAnRGVzdHJveWVyJyAmJiBuYW1lICE9PSAnQm9hdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NoaXAgbmFtZSBtdXN0IGJlIEFpcmNyYWZ0Y2FycmllciwgQmF0dGxlc2hpcCwgQ3J1aXNlciwgU3VibWFyaW5lLCBEZXN0cm95ZXIgb3IgQm9hdCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlU2hpcExlbmd0aChsZW5ndGgpIHtcbiAgaWYgKGxlbmd0aCA8IDEgfHwgbGVuZ3RoID4gNSkge1xuICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBsZW5ndGggbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDUnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZU9yaWVudGF0aW9uKG9yaWVudGF0aW9uKSB7XG4gIGlmIChvcmllbnRhdGlvbiAhPT0gJ2hvcml6b250YWwnICYmIG9yaWVudGF0aW9uICE9PSAndmVydGljYWwnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIG9yaWVudGF0aW9uIG11c3QgYmUgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGNvb3JkaW5hdGVzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBjb29yZGluYXRlcyBtdXN0IGJlIGFuIGFycmF5Jyk7XG4gIH1cbiAgaWYgKGNvb3JkaW5hdGVzLmxlbmd0aCAhPT0gMikge1xuICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBjb29yZGluYXRlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHR3byBudW1iZXJzJyk7XG4gIH1cbiAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgIGlmICh0eXBlb2YgY29vcmRpbmF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBjb29yZGluYXRlcyBtdXN0IGJlIGFuIGFycmF5IG9mIHR3byBudW1iZXJzJyk7XG4gICAgfVxuICAgIGlmIChjb29yZGluYXRlIDwgMCB8fCBjb29yZGluYXRlID4gOSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwIGNvb3JkaW5hdGVzIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA5Jyk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVPdmVybGFwKGNvb3JkaW5hdGVzLCBsZW5ndGgsIG9yaWVudGF0aW9uLCBzaGlwcykge1xuICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBnZXRTaGlwQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZXMsIGxlbmd0aCwgb3JpZW50YXRpb24pO1xuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcENvb3JkaW5hdGVzLmZvckVhY2goKHNoaXBDb29yZGluYXRlKSA9PiB7XG4gICAgICBzaGlwLmNvb3JkaW5hdGVzLmZvckVhY2goKHNoaXBDb29yZGluYXRlMikgPT4ge1xuICAgICAgICBpZiAoc2hpcENvb3JkaW5hdGVbMF0gPT09IHNoaXBDb29yZGluYXRlMlswXSAmJiBzaGlwQ29vcmRpbmF0ZVsxXSA9PT0gc2hpcENvb3JkaW5hdGUyWzFdKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTaGlwcyBjYW5ub3Qgb3ZlcmxhcCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib2FyZFZhbGlkYXRpb24obmFtZSwgbGVuZ3RoLCBjb29yZGluYXRlcywgb3JpZW50YXRpb24sIHNoaXBzKSB7XG4gIHZhbGlkYXRlTmFtZShuYW1lKTtcbiAgdmFsaWRhdGVTaGlwTGVuZ3RoKGxlbmd0aCk7XG4gIHZhbGlkYXRlT3JpZW50YXRpb24ob3JpZW50YXRpb24pO1xuICB2YWxpZGF0ZUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzKTtcbiAgdmFsaWRhdGVPdmVybGFwKGNvb3JkaW5hdGVzLCBsZW5ndGgsIG9yaWVudGF0aW9uLCBzaGlwcyk7XG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBnYW1lYm9hcmQgZmFjdG9yeSBmdW5jdGlvblxuZXhwb3J0IGZ1bmN0aW9uIGdhbWVib2FyZEZhY3RvcnkoKSB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IHtcbiAgICBzaGlwczogW10sXG4gICAgbWlzc2VkQXR0YWNrczogW10sXG4gICAgcGxhY2VTaGlwKG5hbWUsIGxlbmd0aCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uKSB7XG4gICAgICAvLyB2YWxpZGF0ZSBzaGlwXG4gICAgICBpZiAoYm9hcmRWYWxpZGF0aW9uKG5hbWUsIGxlbmd0aCwgY29vcmRpbmF0ZXMsIG9yaWVudGF0aW9uLCB0aGlzLnNoaXBzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvL2NyZWF0ZSBzaGlwIGZ1bmN0aW9uXG4gICAgICBjb25zdCBzaGlwID0gY3JlYXRlU2hpcChsZW5ndGgpOyBcbiAgICAgIHNoaXAubmFtZSA9IG5hbWU7XG4gICAgICBzaGlwLmNvb3JkaW5hdGVzID0gZ2V0U2hpcENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBsZW5ndGgsIG9yaWVudGF0aW9uKTtcblxuICAgICAgLy8gY2hlY2sgaWYgc2hpcCBpcyBvZmYgdGhlIGJvYXJkXG4gICAgICBjb25zdCBzaGlwT2ZmQm9hcmQgPSBzaGlwLmNvb3JkaW5hdGVzLnNvbWUoKHNoaXBDb29yZGluYXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHNoaXBDb29yZGluYXRlO1xuICAgICAgICByZXR1cm4geCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDk7XG4gICAgICB9KTtcbiAgICAgIGlmIChzaGlwT2ZmQm9hcmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGFjZWQgb2ZmIHRoZSBib2FyZCEhJyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcbiAgICB9LFxuICAgIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICAgIGNvbnN0IHNoaXBIaXQgPSBnZXRIaXRTaGlwKGNvb3JkaW5hdGVzLCB0aGlzLnNoaXBzKTtcbiAgICAgIGlmIChzaGlwSGl0KSB7XG4gICAgICAgIHNoaXBIaXQuaGl0KGNvb3JkaW5hdGVzKTsgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1pc3NlZEF0dGFja3MucHVzaChjb29yZGluYXRlcyk7XG4gICAgICB9XG4gICAgfSxcbiAgICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaGlwcy5ldmVyeShzaGlwID0+IHNoaXAuaXNTdW5rKCkpO1xuICAgIH0sXG4gIH07XG4gIHJldHVybiBnYW1lYm9hcmQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2hpcChsZW5ndGgpIHtcbiAgY29uc3Qgc2hpcCA9IHtcbiAgICBsZW5ndGgsXG4gICAgaGl0czogW10sXG4gICAgaGl0KHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmhpdHMucHVzaChwb3NpdGlvbik7XG4gICAgfSxcbiAgICBpc1N1bmsoKSB7XG4gICAgICByZXR1cm4gdGhpcy5oaXRzLmxlbmd0aCA9PT0gdGhpcy5sZW5ndGg7XG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIHNoaXA7XG59XG4iLCJpbXBvcnQgYWlyY3JhZnRjYXJyaWVyIGZyb20gJy4vaW1hZ2VzL2FpcmNyYWZ0Y2Fycmllci5wbmcnO1xuaW1wb3J0IGFpcmNyYWZ0Y2FycmllcjEgZnJvbSAnLi9pbWFnZXMvYWlyY3JhZnRjYXJyaWVyMS5wbmcnO1xuaW1wb3J0IGFpcmNyYWZ0Y2FycmllcjIgZnJvbSAnLi9pbWFnZXMvYWlyY3JhZnRjYXJyaWVyMi5wbmcnO1xuaW1wb3J0IGFpcmNyYWZ0Y2FycmllcjMgZnJvbSAnLi9pbWFnZXMvYWlyY3JhZnRjYXJyaWVyMy5wbmcnO1xuaW1wb3J0IGFpcmNyYWZ0Y2FycmllcjQgZnJvbSAnLi9pbWFnZXMvYWlyY3JhZnRjYXJyaWVyNC5wbmcnO1xuaW1wb3J0IGFpcmNyYWZ0Y2FycmllcjUgZnJvbSAnLi9pbWFnZXMvYWlyY3JhZnRjYXJyaWVyNS5wbmcnO1xuXG5pbXBvcnQgYmF0dGxlc2hpcCBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwLnBuZyc7XG5pbXBvcnQgYmF0dGxlc2hpcDEgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcDEucG5nJztcbmltcG9ydCBiYXR0bGVzaGlwMiBmcm9tICcuL2ltYWdlcy9iYXR0bGVzaGlwMi5wbmcnO1xuaW1wb3J0IGJhdHRsZXNoaXAzIGZyb20gJy4vaW1hZ2VzL2JhdHRsZXNoaXAzLnBuZyc7XG5pbXBvcnQgYmF0dGxlc2hpcDQgZnJvbSAnLi9pbWFnZXMvYmF0dGxlc2hpcDQucG5nJztcblxuaW1wb3J0IGNydWlzZXIgZnJvbSAnLi9pbWFnZXMvY3J1aXNlci5wbmcnO1xuaW1wb3J0IGNydWlzZXIxIGZyb20gJy4vaW1hZ2VzL2NydWlzZXIxLnBuZyc7XG5pbXBvcnQgY3J1aXNlcjIgZnJvbSAnLi9pbWFnZXMvY3J1aXNlcjIucG5nJztcbmltcG9ydCBjcnVpc2VyMyBmcm9tICcuL2ltYWdlcy9jcnVpc2VyMy5wbmcnO1xuXG5pbXBvcnQgZGVzdHJveWVyIGZyb20gJy4vaW1hZ2VzL2Rlc3Ryb3llci5wbmcnO1xuaW1wb3J0IGRlc3Ryb3llcjEgZnJvbSAnLi9pbWFnZXMvZGVzdHJveWVyMS5wbmcnO1xuaW1wb3J0IGRlc3Ryb3llcjIgZnJvbSAnLi9pbWFnZXMvZGVzdHJveWVyMi5wbmcnO1xuaW1wb3J0IGRlc3Ryb3llcjMgZnJvbSAnLi9pbWFnZXMvZGVzdHJveWVyMy5wbmcnO1xuXG5pbXBvcnQgc3VibWFyaW5lIGZyb20gJy4vaW1hZ2VzL3N1Ym1hcmluZS5wbmcnO1xuaW1wb3J0IHN1Ym1hcmluZTEgZnJvbSAnLi9pbWFnZXMvc3VibWFyaW5lMS5wbmcnO1xuaW1wb3J0IHN1Ym1hcmluZTIgZnJvbSAnLi9pbWFnZXMvc3VibWFyaW5lMi5wbmcnO1xuXG5pbXBvcnQgYm9hdCBmcm9tICcuL2ltYWdlcy9ib2F0LnBuZyc7XG5pbXBvcnQgYm9hdDEgZnJvbSAnLi9pbWFnZXMvYm9hdDEucG5nJztcbmltcG9ydCBib2F0MiBmcm9tICcuL2ltYWdlcy9ib2F0Mi5wbmcnO1xuXG5pbXBvcnQgZXhwbG9zaW9uIGZyb20gJy4vaW1hZ2VzL2V4cGxvc2lvbi5wbmcnO1xuXG5jb25zdCBhaXJjcmFmdGNhcnJpZXJTaGlwID0ge1xuICBuYW1lOiAnQWlyY3JhZnRjYXJyaWVyJyxcbiAgc2l6ZTogNSxcbiAgZnVsbEltYWdlOiBhaXJjcmFmdGNhcnJpZXIsXG4gIGltYWdlczogW2FpcmNyYWZ0Y2FycmllcjEsIGFpcmNyYWZ0Y2FycmllcjIsIGFpcmNyYWZ0Y2FycmllcjMsIGFpcmNyYWZ0Y2FycmllcjQsIGFpcmNyYWZ0Y2FycmllcjVdLFxufTtcblxuY29uc3QgYmF0dGxlc2hpcFNoaXAgPSB7XG4gIG5hbWU6ICdCYXR0bGVzaGlwJyxcbiAgc2l6ZTogNCxcbiAgZnVsbEltYWdlOiBiYXR0bGVzaGlwLFxuICBpbWFnZXM6IFtiYXR0bGVzaGlwMSwgYmF0dGxlc2hpcDIsIGJhdHRsZXNoaXAzLCBiYXR0bGVzaGlwNF0sXG59O1xuXG5jb25zdCBjcnVpc2VyU2hpcCA9IHtcbiAgbmFtZTogJ0NydWlzZXInLFxuICBzaXplOiAzLFxuICBmdWxsSW1hZ2U6IGNydWlzZXIsXG4gIGltYWdlczogW2NydWlzZXIxLCBjcnVpc2VyMiwgY3J1aXNlcjNdLFxufTtcblxuY29uc3Qgc3VibWFyaW5lU2hpcCA9IHtcbiAgbmFtZTogJ1N1Ym1hcmluZScsXG4gIHNpemU6IDIsXG4gIGZ1bGxJbWFnZTogc3VibWFyaW5lLFxuICBpbWFnZXM6IFtzdWJtYXJpbmUxLCBzdWJtYXJpbmUyLF0sXG59O1xuXG5jb25zdCBkZXN0cm95ZXJTaGlwID0ge1xuICBuYW1lOiAnRGVzdHJveWVyJyxcbiAgc2l6ZTogMyxcbiAgZnVsbEltYWdlOiBkZXN0cm95ZXIsXG4gIGltYWdlczogW2Rlc3Ryb3llcjEsIGRlc3Ryb3llcjIsIGRlc3Ryb3llcjNdLFxufTtcblxuY29uc3QgYm9hdFNoaXAgPSB7XG4gIG5hbWU6ICdCb2F0JyxcbiAgc2l6ZTogMixcbiAgZnVsbEltYWdlOiBib2F0LFxuICBpbWFnZXM6IFtib2F0MSwgYm9hdDJdLFxufTtcblxuZXhwb3J0IGNvbnN0IHNoaXBzID0gW1xuICBhaXJjcmFmdGNhcnJpZXJTaGlwLFxuICBiYXR0bGVzaGlwU2hpcCxcbiAgY3J1aXNlclNoaXAsXG4gIHN1Ym1hcmluZVNoaXAsXG4gIGRlc3Ryb3llclNoaXAsXG4gIGJvYXRTaGlwLFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFNoaXBJbWFnZXMoc2hpcE5hbWUpIHtcbiAgY29uc3Qgc2hpcCA9IHNoaXBzLmZpbmQoKHNoaXApID0+IHNoaXAubmFtZSA9PT0gc2hpcE5hbWUpO1xuICByZXR1cm4gc2hpcC5pbWFnZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHBsb3Npb25JbWFnZSgpIHtcbiAgcmV0dXJuIGV4cGxvc2lvbjtcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmFja2dyb3VuZGJhdGxlc2hpcHMucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYm9hcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG59XG5cbi5jZWxsIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyA2MyUpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2VsbC5oYXMtYmFja2dyb3VuZC1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC42MykgIWltcG9ydGFudDtcbn1cblxuLmNlbGwuaGFzLWJhY2tncm91bmQtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzAsIDI1NSwgMCwgMC42MykgIWltcG9ydGFudDtcbn1cblxuLmNlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTUsIDIxNSwgMC41KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaXMtZnVsbGhlaWdodCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4udGl0dGxlLXRhZyA+IHNwYW4ge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICB3aWR0aDogMTM1cHg7XG59XG5cbi5oYXMtb2NlYW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbiNyb3RhdGVUZXh0IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHdDQUF3QztFQUN4QyxvQ0FBb0M7RUFDcEMsU0FBUztFQUNULG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxtREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxufVxcblxcbi5jZWxsIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDYzJSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBoZWlnaHQ6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2VsbC5oYXMtYmFja2dyb3VuZC1kYW5nZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNjMpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jZWxsLmhhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMjU1LCAwLCAwLjYzKSAhaW1wb3J0YW50O1xcbn1cXG5cXG4uY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE1LCAyMTUsIDIxNSwgMC41KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmlzLWZ1bGxoZWlnaHQge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi50aXR0bGUtdGFnID4gc3BhbiB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgd2lkdGg6IDEzNXB4O1xcbn1cXG5cXG4uaGFzLW9jZWFuIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9iYWNrZ3JvdW5kYmF0bGVzaGlwcy5wbmcpO1xcbn1cXG5cXG4jcm90YXRlVGV4dCB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtcbiAgZHJhd0dyaWQsXG4gIHNob3dBY3Rpb24sXG4gIHVwZGF0ZVBsYWNpbmdTaGlwLFxuICBjcmVhdGVBbGVydCxcbiAgc3RhcnRQbGFjaW5nLFxuICBoYW5kbGVSb3RhdGVUZXh0Q2xpY2ssXG59IGZyb20gJy4vZG9tTWFuYWdlci5qcyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuL2dhbWUuanMnO1xuXG5jb25zdCBnYW1lSW5zdGFuY2UgPSBnYW1lKCk7XG5cbi8vIGRyYXcgdGhlIGJvYXJkc1xuZHJhd0dyaWQoKTtcbmRyYXdHcmlkKCdlbmVteScpO1xuXG4vLyBTaG93IGFjdGlvbiB0byB0aGUgcGxheWVyXG5zaG93QWN0aW9uKCdwbGF5ZXInLCAnUGxhY2UgeW91ciBzaGlwcycpO1xuc2hvd0FjdGlvbignZW5lbXknLCAnV2FpdGluZyBGb3IgU2hpcHMnLCAnYWxlcnQnKTtcblxudXBkYXRlUGxhY2luZ1NoaXAoJ0FpcmNyYWZ0Y2FycmllcicpO1xuXG5jb25zdCBhbGVydE1lc3NhZ2UgPSAnR2FtZSBzdGFydGVkLCBwbGFjZSB5b3VyIHNoaXBzIDxzcGFuIGlkPVwicm90YXRlVGV4dFwiPihQcmVzcyBSIHRvIHJvdGF0ZSk8L3NwYW4+JztcbmNyZWF0ZUFsZXJ0KCdzdWNjZXNzJywgYWxlcnRNZXNzYWdlKTtcblxuLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBcIlByZXNzIFIgdG8gcm90YXRlXCIgdGV4dFxuaGFuZGxlUm90YXRlVGV4dENsaWNrKCk7IC8vIExsYW1hIGEgbGEgZnVuY2nDs24gaGFuZGxlUm90YXRlVGV4dENsaWNrIHBhcmEgbWFuZWphciBlbCBldmVudG8gZGUgY2xpY1xuXG5zdGFydFBsYWNpbmcoZ2FtZUluc3RhbmNlLCAnaG9yaXpvbnRhbCcsICdBaXJjcmFmdGNhcnJpZXInKTtcbiJdLCJuYW1lcyI6WyJib2FyZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJib2FyZDIiLCJwbGF5ZXJBY3Rpb24iLCJlbmVteUFjdGlvbiIsInBsYWNpbmdTaGlwIiwiYWxlcnQiLCJlbmVteVN0YXR1c1RhZyIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5ZXIxQ2FyZCIsInBsYXllcjFBaXJjcmFmdGNhcnJpZXIiLCJwbGF5ZXIxQWlyY3JhZnRjYXJyaWVyUXVhbnRpdHkiLCJwbGF5ZXIxQmF0dGxlc2hpcCIsInBsYXllcjFCYXR0bGVzaGlwUXVhbnRpdHkiLCJwbGF5ZXIxU3VibWFyaW5lIiwicGxheWVyMVN1Ym1hcmluZVF1YW50aXR5IiwicGxheWVyMUNydWlzZXIiLCJwbGF5ZXIxQ3J1aXNlclF1YW50aXR5IiwicGxheWVyMURlc3Ryb3llciIsInBsYXllcjFEZXN0cm95ZXJRdWFudGl0eSIsInBsYXllcjFCb2F0IiwicGxheWVyMUJvYXRRdWFudGl0eSIsInBsYXllcjJDYXJkIiwicGxheWVyMkFpcmNyYWZ0Y2FycmllciIsInBsYXllcjJBaXJjcmFmdGNhcnJpZXJRdWFudGl0eSIsInBsYXllcjJCYXR0bGVzaGlwIiwicGxheWVyMkJhdHRsZXNoaXBRdWFudGl0eSIsInBsYXllcjJTdWJtYXJpbmUiLCJwbGF5ZXIyU3VibWFyaW5lUXVhbnRpdHkiLCJwbGF5ZXIyQ3J1aXNlciIsInBsYXllcjJDcnVpc2VyUXVhbnRpdHkiLCJwbGF5ZXIyRGVzdHJveWVyIiwicGxheWVyMkRlc3Ryb3llclF1YW50aXR5IiwicGxheWVyMkJvYXQiLCJwbGF5ZXIyQm9hdFF1YW50aXR5IiwiZ2V0RG9tRWxlbWVudHMiLCJzaGlwcyIsImdldEFsbFNoaXBJbWFnZXMiLCJnZXRFeHBsb3Npb25JbWFnZSIsImRvbUVsZW1lbnRzIiwiYm9hcmRWYWxpZGF0aW9uIiwiY3JlYXRlQWxlcnQiLCJ0eXBlIiwibWVzc2FnZSIsImlubmVySFRNTCIsImNvbmNhdCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZHJhd0dyaWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJpIiwiY2VsbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmRDaGlsZCIsInNldEF0dHJpYnV0ZSIsIk1hdGgiLCJmbG9vciIsInVwZGF0ZUdyaWQiLCJkb21Cb2FyZCIsIm1pc3NlZEF0dGFja3MiLCJmb3JFYWNoIiwic2hpcCIsImNvb3JkaW5hdGVzIiwiaW1hZ2VzIiwibmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiY29vcmQiLCJoaXRzIiwiaXNTdW5rIiwicmVtb3ZlIiwiYWN0dWFsU2hpcFBhcnQiLCJmaW5kSW5kZXgiLCJzaGlwQ29vcmQiLCJhY3R1YWxPcmllbnRhdGlvbiIsInRyYW5zZm9ybSIsInVwZGF0ZUNhcmQiLCJhaXJjcmFmdGNhcnJpZXIiLCJmaWx0ZXIiLCJiYXR0bGVzaGlwIiwiY3J1aXNlciIsInN1Ym1hcmluZSIsImRlc3Ryb3llciIsImJvYXQiLCJzdW5rZWQiLCJ1cGRhdGVQbGFjaW5nU2hpcCIsInNoaXBOYW1lIiwiZmluZCIsImZ1bGxJbWFnZSIsInNpemUiLCJzaG93QWN0aW9uIiwiY29sb3IiLCJoYW5kbGVSb3RhdGVUZXh0Q2xpY2siLCJyb3RhdGVUZXh0IiwiZXZlbnQiLCJLZXlib2FyZEV2ZW50Iiwia2V5IiwiZGlzcGF0Y2hFdmVudCIsImNoZWNrVmFsaWRNb3ZlIiwib3JpZW50YXRpb24iLCJzaGlwTGVuZ3RoIiwieCIsInBhcnNlSW50IiwiZ2V0QXR0cmlidXRlIiwieSIsImNvb3JkcyIsImUiLCJzZXRTaGlwSW1hZ2UiLCJzaGlwSW1hZ2VzIiwidmFsaWRNb3ZlIiwiY2VsbFRvQ2hhbmdlIiwicmVtb3ZlU2hpcEltYWdlIiwiY29udGFpbnMiLCJ0cnlQbGFjZVNoaXAiLCJwbGFjZVNoaXAiLCJzdG9wUGxhY2luZyIsImNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsInJlcGxhY2VXaXRoIiwiY2xvbmVOb2RlIiwiY3JlYXRlUmVzZXRCdXR0b24iLCJyZXNldEJ1dHRvbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZW5kR2FtZSIsIndpbm5lciIsInN0YXJ0QXR0YWNraW5nIiwiZ2FtZUluc3RhbmNlIiwiYXR0YWNrIiwicGxheWVyQXR0YWNrIiwiY29tcHV0ZXJCb2FyZCIsInBsYXllckJvYXJkIiwiZ2FtZUVuZCIsInJlc2V0R2FtZSIsInBsYWNpbmciLCJzdGFydFBsYWNpbmciLCJzaGlwVHlwZXMiLCJuZXh0U2hpcCIsImluZGV4T2YiLCJwbGFjZWQiLCJzZXRUaW1lb3V0IiwicmFuZG9tUGxhY2VTaGlwcyIsInN0YXJ0R2FtZSIsImdhbWVib2FyZEZhY3RvcnkiLCJjcmVhdGVTaGlwIiwiZ2FtZSIsImFjdHVhbFBsYXllciIsImdhbWVTdGFydGVkIiwiY2hhbmdlUGxheWVyIiwidmFsdWUiLCJ2YWxpZFNoaXAiLCJyYW5kb20iLCJlcnJvciIsIkVycm9yIiwiY2hlY2tWYWxpZEF0dGFjayIsIm1pc3NlcyIsIm1pc3NlZCIsInNvbWUiLCJtaXNzIiwibWFwIiwiaGl0dGVkIiwiaGl0IiwiaGl0Q29vcmRzIiwicmVjZWl2ZUF0dGFjayIsImNwdUF0dGFjayIsImNvbXB1dGVyQXR0YWNrIiwibWlzc2VkQXR0YWNrIiwiYWxsU2hpcHNTdW5rIiwiZ2V0U2hpcENvb3JkaW5hdGVzIiwiX2Nvb3JkaW5hdGVzIiwiX3NsaWNlZFRvQXJyYXkiLCJzaGlwQ29vcmRpbmF0ZXMiLCJwdXNoIiwiZ2V0SGl0U2hpcCIsIl9jb29yZGluYXRlczIiLCJzaGlwSGl0Iiwic2hpcENvb3JkaW5hdGUiLCJ2YWxpZGF0ZU5hbWUiLCJ2YWxpZGF0ZVNoaXBMZW5ndGgiLCJ2YWxpZGF0ZU9yaWVudGF0aW9uIiwidmFsaWRhdGVDb29yZGluYXRlcyIsIkFycmF5IiwiaXNBcnJheSIsImNvb3JkaW5hdGUiLCJ2YWxpZGF0ZU92ZXJsYXAiLCJzaGlwQ29vcmRpbmF0ZTIiLCJnYW1lYm9hcmQiLCJzaGlwT2ZmQm9hcmQiLCJfc2hpcENvb3JkaW5hdGUiLCJldmVyeSIsInBvc2l0aW9uIiwiYWlyY3JhZnRjYXJyaWVyMSIsImFpcmNyYWZ0Y2FycmllcjIiLCJhaXJjcmFmdGNhcnJpZXIzIiwiYWlyY3JhZnRjYXJyaWVyNCIsImFpcmNyYWZ0Y2FycmllcjUiLCJiYXR0bGVzaGlwMSIsImJhdHRsZXNoaXAyIiwiYmF0dGxlc2hpcDMiLCJiYXR0bGVzaGlwNCIsImNydWlzZXIxIiwiY3J1aXNlcjIiLCJjcnVpc2VyMyIsImRlc3Ryb3llcjEiLCJkZXN0cm95ZXIyIiwiZGVzdHJveWVyMyIsInN1Ym1hcmluZTEiLCJzdWJtYXJpbmUyIiwiYm9hdDEiLCJib2F0MiIsImV4cGxvc2lvbiIsImFpcmNyYWZ0Y2FycmllclNoaXAiLCJiYXR0bGVzaGlwU2hpcCIsImNydWlzZXJTaGlwIiwic3VibWFyaW5lU2hpcCIsImRlc3Ryb3llclNoaXAiLCJib2F0U2hpcCIsImFsZXJ0TWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=