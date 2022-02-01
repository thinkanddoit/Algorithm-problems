const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const number = +require("fs").readFileSync(path).toString().trim();

let dp = new Array(number + 1).fill(0);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= number; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}

console.log(dp[number]);
