const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");
const testNumber = input.shift();
const LCMs = [];

for (let i = 0; i < testNumber; i++) {
  let [first, second] = input[i]
    .split(" ")
    .map((x) => Number(x))
    .sort((a, b) => a - b);
  let commonMutiple = [1];
  for (let j = 2; j <= first; j++) {
    if (first % j === 0 && second % j === 0) {
      commonMutiple.push(j);
      first /= j;
      second /= j;
      j = 1;
    }
  }

  LCMs.push(commonMutiple.reduce((a, b) => a * b) * first * second);
}

console.log(LCMs.join("\n"));
