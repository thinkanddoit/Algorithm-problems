function solution(rows, columns, queries) {
  let result = [];

  let matrix = Array(rows + 1)
    .fill()
    .map(() => Array(columns + 1).fill(0));

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      matrix[i][j] = (i - 1) * columns + j;
    }
  }

  queries.map((querie) => lotate(querie));
  console.log(result);
  function lotate(querie) {
    const [x1, y1, x2, y2] = querie.map(Number);
    let min = matrix[x1][y1];
    const temp = matrix[x1][y1];

    for (let i = x1; i < x2; i++) {
      // ⬆
      matrix[i][y1] = matrix[i + 1][y1];
      min = Math.min(matrix[i][y1], min);
    }
    for (let i = y1; i < y2; i++) {
      // ⬅
      matrix[x2][i] = matrix[x2][i + 1];
      min = Math.min(matrix[x2][i], min);
    }
    for (let i = x2; i > x1; i--) {
      // ⬇
      matrix[i][y2] = matrix[i - 1][y2];
      min = Math.min(matrix[i][y2], min);
    }
    for (let i = y2; i > y1; i--) {
      // ➡️
      matrix[x1][i] = matrix[x1][i - 1];
      min = Math.min(matrix[x1][i], min);
    }
    matrix[x1][y1 + 1] = temp;
    result.push(min);
  }

  return result;
}

solution(100, 97, [[1, 1, 100, 97]]);
