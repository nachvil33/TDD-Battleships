import { gameboardFactory } from './gameboardFactory.js'; // Asumiendo que gameboardFactory también es un export default
import createShip from './shipFactory.js'; // Corregido para importar el default correctamente

export default () => {
  const game = {
    actualPlayer: 1,
    gameStarted: false,
    playerBoard: gameboardFactory(),
    computerBoard: gameboardFactory(),
    changePlayer() {
      this.actualPlayer = this.actualPlayer === 1 ? 2 : 1;
    },
    randomPlaceShips(board) {
      const ships = [
        { name: 'Aircraftcarrier', value: createShip(5) },
        { name: 'Battleship', value: createShip(4) },
        { name: 'Cruiser', value: createShip(3) },
        { name: 'Submarine', value: createShip(3) },
        { name: 'Destroyer', value: createShip(2) },
        { name: 'Boat', value: createShip(2) },
      ];
      ships.forEach((ship) => {
        let coordinates = [];
        let orientation = '';
        let validShip = false;
        while (!validShip) {
          coordinates = [
            Math.floor(Math.random() * 10),
            Math.floor(Math.random() * 10),
          ];
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
    startGame() {
      if (this.playerBoard.ships.length >= 6 && this.computerBoard.ships.length >= 6) {
        this.gameStarted = true;
      } else {
        throw new Error('You need to place all the ships');
      }
    },
    checkValidAttack(x, y) {
      const coords = [x, y];
      if (!this.gameStarted) {
        throw new Error('You need to start the game');
      }
      if (x < 0 || x > 9 || y < 0 || y > 9) {
        throw new Error('Coordinates are not valid');
      }
      const misses = this.computerBoard.missedAttacks;
      const missed = misses.some((miss) => miss[0] === coords[0] && miss[1] === coords[1]);

      const hits = this.computerBoard.ships.map((ship) => ship.hits);
      const hitted = hits.some((hit) => hit.some((hitCoords) => hitCoords[0] === coords[0] && hitCoords[1] === coords[1]));
      if (missed || hitted) {
        throw new Error('You already attacked this coordinates');
      }
      return true;
    },
    playerAttack(x, y) {
      if (this.checkValidAttack(x, y)) {
        this.computerBoard.receiveAttack([x, y]);
        if (this.computerBoard.ships.some((ship) => ship.hits.some((hit) => hit[0] === x && hit[1] === y))) {
          return 'hit';
        }
        this.changePlayer();
        const cpuAttack = this.computerAttack();
        this.changePlayer();
        if (cpuAttack === 'miss') {
          return 'doubleMiss';
        }
      }
      return 'missAndHit';
    },
    computerAttack(hits = 0) {
      if (!this.gameStarted) {
        throw new Error('You need to start the game');
      }
      const coordinates = [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
      ];
      if (this.playerBoard.missedAttacks.some((missedAttack) => missedAttack[0] === coordinates[0] && missedAttack[1] === coordinates[1])) {
        this.computerAttack();
      } else {
        this.playerBoard.receiveAttack(coordinates);
        if (this.playerBoard.ships.some((ship) => ship.hits.some((hit) => hit[0] === coordinates[0] && hit[1] === coordinates[1]))) {
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
    gameEnd() {
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
    resetGame() {
      this.actualPlayer = 1;
      this.gameStarted = false;
      this.playerBoard = gameboardFactory();
      this.computerBoard = gameboardFactory();
    },
  };
  return game;
};
