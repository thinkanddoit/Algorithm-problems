const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");

input.shift();

input.sort((a, b) => {
  if (a.length === b.length) {
    return a > b ? 1 : -1;
  } else {
    return a.length - b.length;
  }
});

input = [...new Set(input)];

console.log(input.join("\n"));
