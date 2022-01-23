const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim();

const answer = [];
for (let i = 0; i < input.length; i++) {
  let number = +input[i];
  let temp = [0, 0, 0];
  index = 2;
  while (true) {
    if (parseInt(number / 2) === 0) {
      temp[index--] = number;
      break;
    }
    temp[index--] = number % 2;
    number = parseInt(number / 2);
  }
  answer.push(temp.join(""));
}

let lastanswer = answer.join("").split("");

for (let i = 0; i < 3; i++) {
  if (lastanswer[i] === "0") lastanswer.splice(0, 1);
}
console.log(lastanswer.join(""));
