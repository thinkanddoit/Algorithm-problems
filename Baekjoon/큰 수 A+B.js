// const path = "/dev/stdin";
const path = "input.txt";

const [a, b] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map((x) => BigInt(x));
const sum = a + b;
console.log(sum.toString());
// const [a, b] = require("fs")
//   .readFileSync(path)
//   .toString()
//   .trim()
//   .split(" ")
//   .map((v) => v.split(""));

// const len = a.length > b.length ? b.length : a.length;

// let answer = "";
// let temp = 0;
// let rest = "";
// for (let i = 0; i < len; i++) {
//   const x = Number(a.pop());
//   const y = Number(b.pop());
//   let sum = x + y + temp;
//   let m = sum % 10;
//   temp = sum > 9 ? 1 : 0;
//   answer += m;
// }
// if (a.length || b.length) {
//   rest = a.length > b.length ? a.join("") : b.join("");
//   rest = Number(rest) + temp;
// }
// if (temp === 1 && a.length === 0 && b.length === 0) {
//   answer += "1";
// }
// answer = answer.split("").reverse().join("");
// console.log(rest ? (rest + answer).trim() : answer.trim());
