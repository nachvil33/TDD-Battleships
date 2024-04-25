export default function createShip(length) {
  const ship = {
    length,
    hits: [],
    hit(position) {
      this.hits.push(position);
    },
    isSunk() {
      return this.hits.length === this.length;
    },
  };
  return ship;
}
