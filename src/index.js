module.exports = function solveSudoku(matrix) {
  let solvedMatrix = matrix;

  if (solved(matrix)) {
    solvedMatrix = matrix;
  }

  return solvedMatrix;
}

function solved(matrix) {
  const cell = [];
  if (!findEmptySpace(matrix, cell)) {
    return true;
  }

  const row = cell[0];
  const col = cell[1];

  for (let number = 1; number < 10; number += 1) {
    if (!checkRow(matrix, row, number) && !checkCol(matrix, col, number) && !checkBox(matrix, row - row % 3, col - col % 3, number)) {
      matrix[row][col] = number;
      if (solved(matrix)) {
        return true;
      }
      matrix[row][col] = 0;
    }
  }
  return false;
}

function findEmptySpace(matrix, cell) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (matrix[i][j] == 0) {
        cell[0] = i;
        cell[1] = j;
        return true;
      }
    }
  }
  return false;
}

function checkRow(matrix, row, number) {
  for (let i = 0; i < 9; i++) {
    if (matrix[row][i] == number) {
      return true;
    }
  }
  return false;
}

function checkCol(matrix, col, number) {
  for (let i = 0; i < 9; i++) {
    if (matrix[i][col] == number) {
      return true;
    }
  }
  return false;
}
function checkBox(matrix, row, col, number) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (matrix[i + row][j + col] == number) {
        return true;
      }
    }
  }
  return false;
}
