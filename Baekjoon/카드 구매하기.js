const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

const sum = +input.shift();
let dp = new Array(sum + 1).fill(0);

const numbers = input
  .shift()
  .split(" ")
  .map((x) => +x);
