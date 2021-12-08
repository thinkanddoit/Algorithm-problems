const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let answer = "";
const input = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n")
  .map((x) => {
    const arr = x.split(" ").map((x) => +x);
    arr.sort((a, b) => a - b);
    if (arr[0] === 0 && arr[1] === 0 && arr[2] === 0)
      console.log(answer.trim());
    else {
      const a = arr[0];
      const b = arr[1];
      const c = arr[2];
      if (a * a + b * b === c * c) answer += "right" + "\n";
      else answer += "wrong" + "\n";
    }
  });
