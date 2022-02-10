const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = +require("fs").readFileSync(path).toString().trim();

const dp = Array.from(new Array(input + 1), () => new Array(10).fill(0));
const Mod = 10007;
dp[1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 2; i <= input; i++) {
  for (let j = 0; j <= 9; j++) {
    dp[i][j] = dp[i - 1].slice(j, 10).reduce((a, b) => (a + b) % Mod);
  }
}

console.log(dp[input].reduce((a, b) => (a + b) % Mod));
