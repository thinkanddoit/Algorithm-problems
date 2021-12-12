const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

input.shift();

input.sort((a, b) => Number(BigInt(a) - BigInt(b)));
console.log(input.join("\n"));
