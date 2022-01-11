const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

// const input = require("fs").readFileSync(path).toString().trim().split("");
// let alphabetCounter = new Array(26).fill(-1);

// for (let i = 0; i < input.length; i++) {
//   if (alphabetCounter[input[i].charCodeAt(0) - 97] === -1) {
//     alphabetCounter[input[i].charCodeAt(0) - 97] = i;
//   }
// }
// console.log(alphabetCounter.join(" "));

//다르게 한번 풀어보자.
const string = require("fs").readFileSync(path).toString().trim();
const arr = [];

for (let i = 97; i < 123; i++) {
  arr.push(string.indexOf(String.fromCharCode(i)));
}
console.log(arr.join(" "));
