const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");
const testNumber = input.shift();

let arr = new Array(testNumber);

for (let i = 0; i < testNumber; i++) {
  const element = input[i].split(" ").map((x) => +x);
  arr[i] = element;
}

arr = arr
  .sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  })
  .map((x) => x.join(" "));

console.log(arr.join("\n"));
