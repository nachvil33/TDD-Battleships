document.addEventListener('DOMContentLoaded', () => {
  const playerContainer = document.getElementById('player-container');
  const playerBoard = document.getElementById('player-board');
  const computerBoard = document.getElementById('computer-board');

  if (playerContainer && playerBoard && computerBoard) {
    initBoard(playerBoard, 'player-cell');
    initBoard(computerBoard, 'computer-cell');

    addEvents(playerBoard, 'player-cell');
    addDraggableShips(playerContainer);
  } else {
    console.error('One or more elements not found.');
  }
});

function initBoard(board: HTMLElement, cellClass: string): void {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add(cellClass);
    cell.dataset.row = Math.floor(i / 10).toString();
    cell.dataset.col = (i % 10).toString();
    board.appendChild(cell);
  }
}

function addEvents(board: HTMLElement, cellClass: string): void {
  board.addEventListener('click', (event: MouseEvent) => {
    const targetCell = event.target as HTMLElement;
    if (targetCell.classList.contains(cellClass)) {
      console.log('Cell clicked:', targetCell.dataset.row, targetCell.dataset.col);
    }
  });

  board.addEventListener('dragover', (event: DragEvent) => {
    event.preventDefault();
  });

  board.addEventListener('drop', (event: DragEvent) => {
    const targetCell = event.target as HTMLElement;
    const draggedShip = document.querySelector('.dragging') as HTMLElement;

    if (targetCell.classList.contains(cellClass) && draggedShip) {
      targetCell.appendChild(draggedShip);
      draggedShip.classList.remove('dragging');
    }
  });
}

function addDraggableShips(container: HTMLElement): void {
  const ships = container.querySelectorAll('.ship');

  ships.forEach((ship) => {
    const draggedShip = ship as HTMLElement;

    draggedShip.addEventListener('dragstart', (event: DragEvent) => {
      if (event.dataTransfer) {
        event.dataTransfer.setData('text/plain', draggedShip.id);
      }
      draggedShip.classList.add('dragging');
    });

    draggedShip.addEventListener('dragend', (event: DragEvent) => {
      draggedShip.classList.remove('dragging');
    });
  });
}
