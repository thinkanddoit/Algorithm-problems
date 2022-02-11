const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

const testNumber = +input.shift();
for (let i = 0; i < testNumber * 3; i += 3) {
  const N = +input[i];
  const firstRow = input[i + 1].split(" ").map((x) => +x);
  const secondRow = input[i + 2].split(" ").map((x) => +x);
  const numbers = [firstRow, secondRow];
  const dp = Array.from(new Array(N + 1), () => new Array(2).fill(0));
  dp[1][0] = numbers[0][0];
  dp[1][1] = numbers[1][0];
  dp[2][0] = dp[1][1] + numbers[0][1];
  dp[2][1] = dp[1][0] + numbers[1][1];
  for (let i = 3; i <= N; i++) {
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 2][1]) + numbers[0][i - 1];
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 2][0]) + numbers[1][i - 1];
  }
  console.log(Math.max(...dp[N]));
}
