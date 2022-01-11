const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("");
let alphabetCounter = new Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  if (alphabetCounter[input[i].charCodeAt(0) - 97] === -1) {
    alphabetCounter[input[i].charCodeAt(0) - 97] = i;
  }
}
console.log(alphabetCounter.join(" "));
