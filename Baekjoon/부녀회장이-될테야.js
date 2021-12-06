// const path = "/dev/stdin";
const path = "input.txt";

let input = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n")
  .map((x) => +x);
const T = Number(input.shift());

const DP = new Array(15).fill().map(() => new Array(15).fill(0));

function solve(a, b) {
  if (a === 0) {
    return b;
  } else if (b === 1) {
    return solve(a - 1, b);
  } else if (DP[a][b] > 0) {
    return DP[a][b];
  }
  DP[a][b] = solve(a, b - 1) + solve(a - 1, b);
  return DP[a][b];
}
for (let i = 0; i < T; i++) {
  const k = input.shift();
  const n = input.shift();
  console.log(solve(k, n));
}
