const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const number = +require("fs").readFileSync(path).toString().trim();

const dp = Array.from(new Array(number + 1), () => new Array(2).fill(0n));

dp[1][1] = 1n;
dp[1][0] = 0n;

for (let i = 2; i <= number; i++) {
  dp[i][0] = dp[i - 1][0] + dp[i - 1][1];
  dp[i][1] = dp[i - 1][0];
}

console.log((dp[number][0] + dp[number][1]).toString());
