const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

const count = +input.shift();
input.unshift(0); //1부터 인덱싱 하기위해 0번째 집 추가

const dp = Array.from(new Array(count + 1), () => new Array(3).fill(0));

for (let i = 1; i <= count; i++) {
  const iHouse = input[i].split(" ").map((x) => +x);

  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + iHouse[0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + iHouse[1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + iHouse[2];
}

console.log(Math.min(...dp[count]));
