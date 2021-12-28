const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim();

// let arr = [];
// let tag = "";
// let tagStart = false;
// let word = [];

// for (let i = 0; i < input.length; i++) {
//   if (input[i] === "<") {
//     if (word.length !== 0) {
//       word.reverse();
//       arr.push(word.join(""));
//       word = [];
//     }
//     tagStart = true;
//   } else if (input[i] === ">") {
//     tagStart = false;
//     arr.push(`<${tag}>`);
//     tag = "";
//   } else if (tagStart) {
//     tag += input[i];
//   } else if (input[i] === " ") {
//     if (word.length !== 0) {
//       word.reverse();
//       arr.push(word.join(""));
//       word = [];
//     }
//     arr.push(" ");
//   } else {
//     word.push(input[i]);
//   }
// }
// if (word.length !== 0) {
//   word.reverse();
//   arr.push(word.join(""));
//   word = [];
// }

// console.log(arr.join(""));
//정규식을 공부해야한다
//정규식으로 코드를 확 줄일 수 있다.

const regex = /(<.+?>|\s)/g;
const temp = input.split(regex);
const result = temp.map((x) => {
  return regex.test(x) ? x : x.split("").reverse().join("");
});
console.log(result.join(""));
