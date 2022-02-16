const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");
const count = +input.shift();

const numbers = input[0].split(" ").map((x) => +x);
numbers.unshift(0);

const dp = new Array(count + 1).fill(0);
let min = numbers[1];
dp[1] = numbers[1];

for (let i = 2; i <= count; i++) {
  if (numbers[i] < 0) {
    if (min > 0) {
      min = numbers[i];
    } else {
      if (numbers[i] < min) {
        dp[i] = dp[i - 1] + min;
        min = numbers[i];
      } else {
        dp[i] = dp[i - 1] + numbers[i];
      }
    }
  } else {
    dp[i] = dp[i - 1] + numbers[i];
    if (numbers[i] < min) min = numbers[i];
  }
}

console.log(dp);
