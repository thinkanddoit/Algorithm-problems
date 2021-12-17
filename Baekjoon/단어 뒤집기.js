const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let input = require("fs").readFileSync(path).toString().split("\n");
const len = input.shift();

for (let i = 0; i < len; i++) {
  let arr = input[i].split(" ");
  for (let j = 0; j < arr.length; j++) {
    arr[j] = arr[j].split("").reverse().join("");
  }
  input[i] = arr.join(" ");
}

console.log(input.join("\n"));
