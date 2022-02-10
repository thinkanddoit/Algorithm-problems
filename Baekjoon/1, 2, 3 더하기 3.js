const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [count, ...arr] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const max = Math.max(...arr);
const dp = new Array(max + 1);
const Mod = 1000000009;

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= max; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % Mod;
}

arr.map((x) => {
  console.log(dp[x]);
});
