const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("");

let alphabetCounter = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  alphabetCounter[input[i].charCodeAt(0) - 97]++;
}

console.log(alphabetCounter.join(" "));
