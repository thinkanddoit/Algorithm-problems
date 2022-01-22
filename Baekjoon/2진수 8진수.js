const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const number = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("")
  .map((x) => +x);

const answer = [];

for (let i = number.length - 1; i >= 0; i -= 3) {
  let sum = 0;
  if (number[i] === 1) sum += 1;
  if (number[i - 1] === 1) sum += 2;
  if (number[i - 2] === 1) sum += 4;
  answer.push(sum);
}

console.log(answer.reverse().join(""));
