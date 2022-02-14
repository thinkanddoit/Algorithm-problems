const { isAnyArrayBuffer } = require("util/types");

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");
const count = +input.shift();
const numbers = input[0].split(" ").map((x) => +x);
numbers.unshift(0);

const dp1 = new Array(count + 1).fill(0);
const dp2 = new Array(count + 1).fill(0);
const dp3 = new Array(count + 1).fill(0);

dp1[1] = 1;
for (let i = 2; i <= count; i++) {
  for (let j = 1; j < i; j++) {
    if (numbers[i] > numbers[j]) {
      dp1[i] = Math.max(dp1[i], dp1[j]);
    }
  }
  dp1[i] += 1;
}

dp2[count] = 1;
for (let i = count - 1; i >= 1; i--) {
  for (let j = count; j > i; j--) {
    if (numbers[i] > numbers[j]) {
      dp2[i] = Math.max(dp2[i], dp2[j]);
    }
  }
  dp2[i] += 1;
}

for (let i = 1; i <= count; i++) {
  dp3[i] = dp1[i] + dp2[i];
}
console.log(Math.max(...dp3) - 1);
