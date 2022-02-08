const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

const count = +input[0];
const numbers = input[1].split(" ").map((x) => +x);
numbers.unshift(0); //1부터 인덱싱을 하기위해 0번째 무의미한 값을 추가

const dp = new Array(count + 1).fill(-1001); //1부터 인덱싱하기 위해 마찬가지로 count+1 크기의 dp 배열 생성

dp[1] = numbers[1];
for (let i = 2; i <= count; i++) {
  dp[i] = Math.max(dp[i - 1] + numbers[i], numbers[i]);
}

console.log(Math.max(...dp));
