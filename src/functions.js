// import params from './params';

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
  const rows = board.length;
  const columns = board[0].length;
  let minesPlanted = 0;
  while (minesPlanted < minesAmount) {
    const rowSel = parseInt(Math.random() * rows, 10);
    const columnSel = parseInt(Math.random() * columns, 10);

    if (!board[rowSel][columnSel].mined) {
      board[rowSel][columnSel].mined = true;
      minesPlanted++;
    }
  }
};

const createMinedBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns);
  spreadMines(board, minesAmount);
  return board;
};

const cloneBoard = board => {
  return board.map(rows => {
    return rows.map(field => {
      return {...field};
    });
  });
};

const getNeighbors = (board, row, column) => {
  const neighbors = [];
  const rows = [row - 1, row, row + 1];
  const columns = [column - 1, column, column + 1];
  rows.forEach(r => {
    columns.forEach(c => {
      const different = r !== row || c !== column;
      const validRow = r >= 0 && r < board.length;
      const validColumn = c >= 0 && c < board[0].length;
      if (different && validRow && validColumn) {
        neighbors.push(board[r][c]);
      }
    });
  });
  return neighbors;
};

const safeNeighborhood = (board, row, column) => {
  const safes = (result, neighbor) => result && !neighbor.mined; // if one or more neighbors are mined safes is false
  return getNeighbors(board, row, column).reduce(safes, true);
};

const openField = (board, row, column) => {
  const field = board[row][column];
  if (!field.opened) {
    // if not opened opens the field
    field.opened = true;
    if (field.mined) {
      // if mined explode the mine
      field.exploded = true;
    } else if (safeNeighborhood(board, row, column)) {
      // if the neighborhood is safe open all other neighbor's fields
      getNeighbors(board, row, column).forEach(n =>
        openField(board, n.row, n.column),
      );
    } else {
      // if the field is not mined and its neighborhood is not safe, calculate number of mines
      const neighbors = getNeighbors(board, row, column);
      field.nearMines = neighbors.filter(
        n => n.mined,
      ).length; /* filter all neighbors that are
      mined and saves the number of mined neighbors in field.nearMines */
    }
  }
};
const allFields = board => [].concat(...board); // transform the board into a array of fields
const hadExplosion = board =>
  allFields(board).filter(field => field.exploded).length > 0;
const pendding = field =>
  (!field.mined && !field.opened) || (field.mined && !field.flagged); // function to verify if the field is pendding (so the game is not finished)
const wonGame = board => allFields(board).filter(pendding).length === 0;
const showMines = board =>
  allFields(board)
    .filter(field => field.mined)
    .forEach(field => (field.opened = true));
const invertFlag = (board, row, column) => {
  const field = board[row][column];
  if (!field.opened) {
    field.flagged = !field.flagged;
  } else {
    field.flagged = false;
  }
};
const flagsUsed = board =>
  allFields(board).filter(field => field.flagged).length;
export {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
};
