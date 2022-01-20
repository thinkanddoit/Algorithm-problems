const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

const bigTestNumber = +input.shift();
const answer = [];

for (let i = 0; i < bigTestNumber; i++) {
  const numbers = input[i].split(" ").map((x) => +x);
  const smallTestNumber = numbers.shift();
  const GCDs = [];
  numbers.sort((a, b) => b - a);
  for (let i = 0; i < smallTestNumber; i++) {
    for (let j = i + 1; j < smallTestNumber; j++) {
      GCDs.push(gcd(numbers[i], numbers[j]));
    }
  }
  answer.push(GCDs.reduce((a, b) => a + b));
}

function gcd(bigger, smaller) {
  if (smaller === 0) return bigger;
  else {
    return gcd(smaller, bigger % smaller);
  }
}

console.log(answer.join("\n"));
