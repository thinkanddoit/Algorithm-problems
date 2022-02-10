const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = +require("fs").readFileSync(path).toString().trim();

//00 01 10 가로 한줄에 올 수 있는 경우의 수는 3가지 이다.
//규칙은 다음과 같다.
//00 다음에는 아무거나 올 수 있음
//01 다음에는 00 or 10 가능
//10 다음에는 00 or 01 가능

const dp = Array.from(new Array(input + 1), () => new Array(3).fill(0));
const Mod = 9901;
dp[1] = [1, 1, 1];

for (let i = 2; i <= input; i++) {
  dp[i][0] = (dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % Mod;
  dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % Mod;
  dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % Mod;
}

console.log(dp[input].reduce((a, b) => (a + b) % Mod));
