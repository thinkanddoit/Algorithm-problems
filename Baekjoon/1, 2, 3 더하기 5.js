const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const [count, ...arr] = require('fs')
  .readFileSync(path)
  .toString()
  .trim()
  .split('\n')
  .map((x) => +x);

const max = Math.max(...arr);
const answer = [];

const Mod = 1000000009;

let dp = new Array(max + 1).fill(null).map(() => new Array(4).fill(0));
dp[1][1] = 1;
dp[2][2] = 1;
dp[3][1] = 1;
dp[3][2] = 1;
dp[3][3] = 1;

for (let i = 4; i <= max; i++) {
  dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % Mod;
  dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % Mod;
  dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % Mod;
}

arr.map((n) => {
  answer.push((dp[n][1] + dp[n][2] + dp[n][3]) % Mod);
});

console.log(answer.join('\n'));
