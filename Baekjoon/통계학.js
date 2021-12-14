const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const T = input.shift();

const a = Math.round(input.reduce((a, b) => a + b) / T);
input.sort((a, b) => a - b);
const b = input[Math.floor(T / 2)];

console.log(input);
for (let i = 0; i < T; i++) {}
