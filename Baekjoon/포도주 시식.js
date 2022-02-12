const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const numbers = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const count = numbers[0]; //인덱싱을 1부터 하기위해 0번의 값을 따로 삭제하지는 않는다.
const dp = Array.from(new Array(count + 1), () => new Array(2).fill(0));
//2차원 배열 dp의 첫번째 인덱스는 번호를 의미한다. 1번 자리까지의 최대 값
//2차원 배열 dp의 두번째 인덱스는 0일때는 앞부분에 붙어있는 수가 없을 때, 1일때는 붙어있는 수가 있을 때를 의미한다.
if (count === 1) {
  console.log(numbers[1]);
} else {
  dp[1][0] = numbers[1];
  dp[1][1] = numbers[1];
  dp[2][0] = numbers[2];
  dp[2][1] = dp[1][0] + numbers[2];

  for (let i = 3; i <= count; i++) {
    dp[i][0] =
      Math.max(dp[i - 2][0], dp[i - 2][1], dp[i - 3][0], dp[i - 3][1]) +
      numbers[i];
    dp[i][1] = dp[i - 1][0] + numbers[i];
  }

  console.log(Math.max(...new Set([...dp[count], ...dp[count - 1]])));
}
