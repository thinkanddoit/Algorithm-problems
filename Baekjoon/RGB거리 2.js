const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

const count = +input.shift();
input.unshift(0); //1부터 인덱싱 하기위해 0번째 집 추가

const R = 0;
const G = 1;
const B = 2;

const dp = Array.from(new Array(count + 1), () => new Array(3).fill(0));
const min = [];

for (let j = 0; j <= 2; j++) {
  for (let i = 1; i <= count; i++) {
    const iHouse = input[i].split(" ").map((x) => +x);

    dp[i][R] = Math.min(dp[i - 1][G], dp[i - 1][B]) + iHouse[0];
    dp[i][G] = Math.min(dp[i - 1][R], dp[i - 1][B]) + iHouse[1];
    dp[i][B] = Math.min(dp[i - 1][R], dp[i - 1][G]) + iHouse[2];

    if (j === R && i === 1) dp[i][G] = dp[i][B] = 1001;
    if (j === G && i === 1) dp[i][R] = dp[i][B] = 1001;
    if (j === B && i === 1) dp[i][R] = dp[i][G] = 1001;

    if (j === R && i === count)
      min.push(
        Math.min(
          dp[count - 1][R] + iHouse[G],
          dp[count - 1][R] + iHouse[B],
          dp[count - 1][G] + iHouse[B],
          dp[count - 1][B] + iHouse[G]
        )
      );
    if (j === G && i === count)
      min.push(
        Math.min(
          dp[count - 1][G] + iHouse[B],
          dp[count - 1][G] + iHouse[R],
          dp[count - 1][R] + iHouse[B],
          dp[count - 1][B] + iHouse[R]
        )
      );
    if (j === B && i === count)
      min.push(
        Math.min(
          dp[count - 1][B] + iHouse[R],
          dp[count - 1][B] + iHouse[G],
          dp[count - 1][R] + iHouse[G],
          dp[count - 1][G] + iHouse[R]
        )
      );
  }
}
console.log(Math.min(...min));
