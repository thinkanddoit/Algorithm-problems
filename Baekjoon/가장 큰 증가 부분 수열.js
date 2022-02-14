const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");
const count = +input.shift();
const numbers = input[0].split(" ").map((x) => +x);
numbers.unshift(0);

const dp = new Array(count + 1).fill(0);

for (let i = 1; i <= count; i++) {
  for (let j = 1; j < count; j++) {
    if (numbers[j] < numbers[i]) dp[i] = Math.max(dp[i], dp[j]);
  }
  dp[i] += numbers[i];
}

console.log(Math.max(...dp));
