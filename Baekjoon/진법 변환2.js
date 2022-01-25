const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [number, way] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map((x) => +x);

console.log(number.toString(way).toUpperCase());
