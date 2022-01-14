const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim();
let answer = [];

for (let i = 0; i < input.length; i++) {
  answer.push(input.slice(i, input.length));
}
answer.sort();
console.log(answer.join("\n"));
