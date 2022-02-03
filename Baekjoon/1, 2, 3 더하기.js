const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [count, ...arr] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const answer = [];

arr.map((n) => {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  answer.push(dp[n]);
});

console.log(answer.join("\n"));
