const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const stringOfInputNumber = require("fs").readFileSync(path).toString().trim();

const digit = stringOfInputNumber.length;
const pointOfDigitChange = Math.pow(10, digit - 1);
const inputNumber = +stringOfInputNumber;

let answer = 0;

for (let i = 1; i < digit; i++) {
  answer += 9 * Math.pow(10, i - 1) * i;
}
answer += (inputNumber - pointOfDigitChange + 1) * digit;

console.log(answer);
