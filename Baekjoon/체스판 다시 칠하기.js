const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().split("\n");
const [m, n] = input
  .shift()
  .split(" ")
  .map((x) => +x);

WB = "WBWBWBWB";
BW = "BWBWBWBW";
const arr = [];

for (let i = 0; i < m - 7; i++) {
  for (let j = 0; j < n - 7; j++) {
    let sum1 = 0;
    let sum2 = 0;
    for (let x = i; x < i + 8; x++) {
      const part = input[x].slice(j, j + 8);
      if (x % 2 === 0) {
        for (let w = 0; w < 8; w++) {
          if (part[w] !== BW[w]) sum1++;
          if (part[w] !== WB[w]) sum2++;
        }
      } else {
        for (let w = 0; w < 8; w++) {
          if (part[w] !== WB[w]) sum1++;
          if (part[w] !== BW[w]) sum2++;
        }
      }
    }
    const smaller = sum1 < sum2 ? sum1 : sum2;
    arr.push(smaller);
  }
}
arr.sort((a, b) => a - b);
console.log(arr[0]);
