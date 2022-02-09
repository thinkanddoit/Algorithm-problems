const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = +require("fs").readFileSync(path).toString().trim();

const dp = new Array(input + 1).fill(input);

const floor = Math.floor(Math.sqrt(input));

for (let i = 1; i <= floor; i++) {
  dp[Math.pow(i, 2)] = 1;
}

for (let i = 2; i <= input; i++) {
  if (dp[i] === input) {
    for (let j = 1; j * j <= i / 2; j++) {
      dp[i] = Math.min(dp[i], dp[j * j] + dp[i - j * j]);
    }
  }
}

console.log(dp[input]);
