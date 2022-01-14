const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim();

const [a, b, c, d] = input.split(" ");

console.log(Number(a + b) + Number(c + d));
