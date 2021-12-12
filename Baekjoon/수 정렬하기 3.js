const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const T = input.shift();
const max = Math.max(...input);
let arr = new Array(max + 1).fill(0);

for (let i = 0; i < T; i++) {
  arr[input[i]]++;
}
for (let j = 0; j < max; j++) {
  arr[j + 1] += arr[j];
}
const sorted = new Array(T);
for (let i = 0; i < T; i++) {
  sorted[arr[input[i]]-- - 1] = input[i];
}
console.log(sorted.join("\n"));
