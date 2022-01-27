const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let number = +require("fs").readFileSync(path).toString();

let dp = new Array(number + 1).fill(0);

for (let i = 2; i <= number; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i / 2] + 1, dp[i]);
  }
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
  }
}
console.log(dp[number]);
