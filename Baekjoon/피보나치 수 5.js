const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString();

console.log(solve(Number(input)));

function solve(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return solve(n - 1) + solve(n - 2);
}
