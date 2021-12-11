const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [len, target] = input[0].split(" ").map((x) => +x);
const number = input[1].split(" ").map((x) => +x);

let max = 0;

for (let i = 0; i < len; i++) {
  for (let j = i + 1; j < len; j++) {
    for (let k = j + 1; k < len; k++) {
      const sum = number[i] + number[j] + number[k];
      if (sum <= target && sum > max) max = sum;
    }
  }
}
console.log(max);
