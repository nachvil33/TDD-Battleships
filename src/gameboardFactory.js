import createShip from './shipFactory.js';

// function to get the coordinates of a ship
function getShipCoordinates(coordinates, length, orientation) {
  const [x, y] = coordinates;
  const shipCoordinates = [];
  for (let i = 0; i < length; i += 1) {
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
  const [x, y] = coordinates;
  let shipHit = null;
  ships.forEach((ship) => {
    ship.coordinates.forEach((shipCoordinate) => {
      if (shipCoordinate[0] === x && shipCoordinate[1] === y) {
        shipHit = ship;
      }
    });
  });
  return shipHit;
}

function validateName(name) {
  // Aircraftcarrier, Battleship, Cruiser, Submarine, Destroyer, Boat
  if (name !== 'Aircraftcarrier' && name !== 'Battleship' && name !== 'Cruiser'
  && name !== 'Submarine' && name !== 'Destroyer' && name !== 'Boat') {
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
  coordinates.forEach((coordinate) => {
    if (typeof coordinate !== 'number') {
      throw new Error('Ship coordinates must be an array of two numbers');
    }
    if (coordinate < 0 || coordinate > 9) {
      throw new Error('Ship coordinates must be between 0 and 9');
    }
  });
}

function validateOverlap(coordinates, length, orientation, ships) {
  const shipCoordinates = getShipCoordinates(coordinates, length, orientation);
  ships.forEach((ship) => {
    shipCoordinates.forEach((shipCoordinate) => {
      ship.coordinates.forEach((shipCoordinate2) => {
        if (shipCoordinate[0] === shipCoordinate2[0] && shipCoordinate[1] === shipCoordinate2[1]) {
          throw new Error('Ships cannot overlap');
        }
      });
    });
  });
}

export function boardValidation(name, length, coordinates, orientation, ships) {
  validateName(name);
  validateShipLength(length);
  validateOrientation(orientation);
  validateCoordinates(coordinates);
  validateOverlap(coordinates, length, orientation, ships);
  return true;
}

// gameboard factory function
export function gameboardFactory() {
  const gameboard = {
    ships: [],
    missedAttacks: [],
    placeShip(name, length, coordinates, orientation) {
      // validate ship
      if (boardValidation(name, length, coordinates, orientation, this.ships) === false) {
        return;
      }
      
      //create ship function
      const ship = createShip(length); 
      ship.name = name;
      ship.coordinates = getShipCoordinates(coordinates, length, orientation);

      // check if ship is off the board
      const shipOffBoard = ship.coordinates.some((shipCoordinate) => {
        const [x, y] = shipCoordinate;
        return x < 0 || x > 9 || y < 0 || y > 9;
      });
      if (shipOffBoard) {
        throw new Error('Ships cannot be placed off the board');
      }

      this.ships.push(ship);
    },
    receiveAttack(coordinates) {
      const shipHit = getHitShip(coordinates, this.ships);
      if (shipHit) {
        shipHit.hit(coordinates); 
      } else {
        this.missedAttacks.push(coordinates);
      }
    },
    allShipsSunk() {
      return this.ships.every(ship => ship.isSunk());
    },
  };
  return gameboard;
}