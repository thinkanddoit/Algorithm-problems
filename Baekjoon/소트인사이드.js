const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("")
  .map((x) => +x);

input.sort((a, b) => b - a);
console.log(input.join(""));
