const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const number = +require("fs").readFileSync(path).toString().trim();

const dp = Array.from(new Array(number + 1), () => new Array(11).fill(0));
const Mod = 1000000000;
for (let i = 1; i <= 9; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= number; i++) {
  dp[i][0] = dp[i - 1][1] % Mod;
  for (let j = 1; j <= 9; j++) {
    dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % Mod;
  }
}
console.log(dp[number].reduce((a, b) => (a + b) % Mod));
