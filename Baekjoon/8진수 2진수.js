const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const number = require("fs").readFileSync(path).toString().trim();

function from8to2(number) {
  switch (number) {
    case "1":
      return "001";
      break;
    case "2":
      return "010";
      break;
    case "3":
      return "011";
      break;
    case "4":
      return "100";
      break;
    case "5":
      return "101";
      break;
    case "6":
      return "110";
      break;
    case "7":
      return "111";
      break;
    default:
      return "000";
  }
}

let answer = "";

for (let i = 0; i < number.length; i++) {
  answer += from8to2(number[i]);
}
while (answer[0] === "0") answer = answer.substring(1, answer.length);
if (answer.length === 0) console.log(0);
else console.log(answer);
