const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const numbers = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

numbers.sort((a, b) => a - b);
const sumOfAll = numbers.reduce((a, b) => a + b);
const toExceptIndex = [];

Loof1: for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (numbers[i] + numbers[j] === sumOfAll - 100) {
      toExceptIndex.push(i);
      toExceptIndex.push(j);
      break Loof1;
    }
  }
}

for (let i = 0; i < 9; i++) {
  if (!toExceptIndex.filter((element) => element === i).length)
    console.log(numbers[i]);
}
