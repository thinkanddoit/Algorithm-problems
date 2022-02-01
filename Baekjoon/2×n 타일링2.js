const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const number = +require("fs").readFileSync(path).toString().trim();

let dp = [0, 1, 3];

for (let i = 3; i <= number; i++) {
  dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 10007;
}

console.log(dp[number]);
