const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

const [A, B] = input[0].split(" ").map((x) => +x);
const numbers = input[2].split(" ").map((x) => +x);

let temp = 0;
for (let i = 0; i < numbers.length; i++) {
  temp += numbers[numbers.length - 1 - i] * Math.pow(A, i);
}

const answer = [];

while (temp !== 0) {
  answer.push(temp % B);
  temp = parseInt(temp / B);
}
console.log(answer.reverse().join(" "));
