const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

const sum = +input.shift();
const numbers = input[0].split(" ").map((x) => +x);
let dp = new Array(sum + 1).fill(10001);

dp[0] = 0;

for (let i = 1; i <= sum; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j] + numbers[j - 1]);
  }
}
console.log(dp[sum]);
