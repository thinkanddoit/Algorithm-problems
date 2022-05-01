const picture = [
  [1, 1, 1, 0],
  [1, 2, 2, 0],
  [1, 0, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 3],
  [0, 0, 0, 3],
];
const m = 6;
const n = 4;

function solution(m, n, picture) {
  const visit = Array(m)
    .fill()
    .map(() => Array(n).fill(false));
  function dfs(x, y) {
    let cnt = 0;
    if (visit[x][y]) return;
  }
  return;
}

solution(input);
