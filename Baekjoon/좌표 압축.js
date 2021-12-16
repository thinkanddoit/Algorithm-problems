const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = require("fs").readFileSync(path).toString().trim().split("\n");
input.shift();

input = input[0].split(" ").map((x) => +x);
const inputWithoutDuplication = [...new Set(input)].sort((a, b) => a - b);
const map = new Map();
inputWithoutDuplication.forEach((value, index) => {
  map.set(value, index);
});
let answer = [];
input.map((x) => {
  answer.push(map.get(x));
});

console.log(answer.join(" "));
