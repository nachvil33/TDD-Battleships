export function createShip(shipData) {
  const ship = {
    name: shipData.name,
    size: shipData.size,
    hits: [],
    images: shipData.images,
    isSunk() {
      return this.hits.length === this.size;
    },
    hit(coordinate) {
      this.hits.push(coordinate); // Añadir coordenadas del golpe
    },
  };
  return ship;
}
