const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [x, y, w, h] = require("fs")
  .readFileSync(path)
  .toString()
  .split(" ")
  .map((x) => +x);

const arr = [];
arr.push(x);
arr.push(y);
arr.push(w - x);
arr.push(h - y);

arr.sort((a, b) => a - b);
console.log(arr[0]);
