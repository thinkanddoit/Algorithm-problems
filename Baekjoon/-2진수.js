const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

let number = Number(require("fs").readFileSync(path).toString().trim());
let result = [];

while (number != 0) {
  console.log("number", number);
  console.log("number/-2, ceil : ", Math.ceil(number / -2));
  console.log("number%-2 : ", number % -2);

  result.push(Math.abs(number % -2));
  number = Math.ceil(number / -2);
}
if (result.length === 0) console.log(0);
else console.log(result.reverse().join(""));
