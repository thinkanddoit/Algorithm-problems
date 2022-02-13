const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const numbers = require("fs").readFileSync(path).toString().trim().split("\n");

const count = +numbers[0]; //1부터 인덱싱을 위해서 0번째 값은 그대로 둔다
const dp = Array.from(new Array(count + 1), () => new Array(count + 1).fill(0));

dp[1][1] = +numbers[1];
for (let i = 2; i <= count; i++) {
  const iLineNumbers = numbers[i].split(" ").map((x) => +x);
  for (let j = 1; j <= i; j++) {
    dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + iLineNumbers[j - 1];
  }
}
console.log(Math.max(...dp[count]));
