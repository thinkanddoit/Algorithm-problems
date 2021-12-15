const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

const T = +input.shift();
let arr = new Array(T).fill(new Array(2));
for (let i = 0; i < T; i++) {
  const x = input[i].split(" ").map((x) => +x);
  arr[i] = x;
}

arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

arr = arr.map((x) => x.join(" "));
console.log(arr.join("\n"));
