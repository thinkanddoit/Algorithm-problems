const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const T = input.shift();

const a = Math.round(input.reduce((a, b) => a + b) / T);
console.log(a);
input.sort((a, b) => a - b);
const b = input[Math.floor(T / 2)];
console.log(b);

const map = new Map();
for (let i = 0; i < T; i++) {
  let value = map.get(input[i]);
  if (!value) map.set(input[i], 1);
  else map.set(input[i], ++value);
}

const sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
const maxCount = sorted[0][1];
const maxArray = [];
sorted.map((x) => {
  if (x[1] === maxCount) maxArray.push(x[0]);
});
if (maxArray.length === 1) console.log(sorted[0][0]);
else {
  maxArray.sort((a, b) => a - b);
  console.log(maxArray[1]);
}
if (input.length === 1) console.log(0);
else {
  console.log(input[T - 1] - input[0]);
}
