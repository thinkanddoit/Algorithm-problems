const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const testNumber = input.shift();

const maxNumber = Math.max(...input);

let dp = new Array(maxNumber + 1).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= maxNumber; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}
const answer = [];
for (let i = 0; i < testNumber; i++) {
  answer.push(dp[input[i]]);
}

console.log(answer.join("\n"));
