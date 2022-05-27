const createBoard = (rows, columns) => {
  return Array(rows)
    .fill(0)
    .map((_, row) => {
      return Array(columns)
        .fill(0)
        .map((_, column) => {
          return {
            row,
            column,
            opened: false,
            flagged: false,
            mined: false,
            exploded: false,
            nearMines: 0,
          };
        });
    });
};

const spreadMines = (board, minesAmount) => {
  const rows = board.lenght;
  const columns = board[0].lenght;
  let minesPlanted = 0;
  while (minesPlanted < minesAmount) {
    const rowSelected = parseInt(Math.random() * rows, 10);
    const colSelected = parseInt(Math.random() * columns, 10);

    if (!board[rowSelected][colSelected].mined) {
      board[rowSelected][colSelected].mined = true;
      minesPlanted++;
    }
  }
};

const createMinedBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns);
  spreadMines(board, minesAmount);
  return board;
};

export {createMinedBoard};
