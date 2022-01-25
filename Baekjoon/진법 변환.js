const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [number, way] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ");

console.log(number);
console.log(parseInt(number.toString().toLowerCase(), way));
