const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [N, K] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map((x) => +x);

const dp = new Array(K + 1).fill(null).map(() => new Array(N + 1).fill(0));
const Mod = 1000000000;

for (let i = 0; i <= N; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= K; i++) {
  for (let j = 0; j <= N; j++) {
    let temp = 0;
    for (let k = 0; k <= j; k++) {
      temp += dp[i - 1][k];
    }
    dp[i][j] = temp % Mod;
  }
}

console.log(dp[K][N]);
