const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let [count, arr] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");
count = Number(count);
arr = arr.split(" ").map((x) => Number(x));
arr.unshift(0);

const dp = new Array(count + 1).fill(0);

dp[1] = 1;

for (let i = 2; i <= count; i++) {
  for (let j = 1; j < i; j++) {
    if (arr[i] > arr[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }
  if (dp[i] === 0) dp[i] = 1;
}

console.log(dp);
