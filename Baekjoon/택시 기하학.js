const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = +require("fs").readFileSync(path).toString();

console.log((Math.pow(input, 2) * Math.PI).toFixed(6));
console.log((2 * Math.pow(input, 2)).toFixed(6));
