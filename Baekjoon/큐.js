const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");
const len = input.shift();
const queue = [];
let answer = [];

// for (let i = 0; i < len; i++) {
//   const [command, number] = input[i].split(" ");
//   if (command === "push") queue.push(number);
//   else if (command === "front") answer.push(queue[0] ? queue[0] : -1);
//   else if (command === "back")
//     answer.push(queue[queue.length - 1] ? queue[queue.length - 1] : -1);
//   else if (command === "size") answer.push(queue.length);
//   else if (command === "empty") answer.push(queue.length ? 0 : 1);
//   else if (command === "pop") {
//     const popped = queue.shift();
//     if (popped) answer.push(popped);
//     else answer.push(-1);
//   }
// }

// console.log(answer.join("\n"));

//다시 풀어보기
//https://www.acmicpc.net/source/34382388
//위 주소 답안을 참고해서 문제를 다시 풀어본다. 우선 스위치문이 가독성이 더 좋은 것 같다 개인적으로
//조건은 같게 적을 수 있으면 같게 적는게 가독성이 좋다.
//가독성은 readability

for (let i = 0; i < len; i++) {
  switch (input[i]) {
    case "front":
      answer.push(queue.length !== 0 ? queue[0] : -1);
      break;
    case "back":
      answer.push(queue.length !== 0 ? queue[queue.length - 1] : -1);
      break;
    case "empty":
      answer.push(queue.length !== 0 ? 0 : 1);
      break;
    case "size":
      answer.push(queue.length);
      break;
    case "pop":
      answer.push(queue.length !== 0 ? queue.shift() : -1);
      break;
    default:
      const [cmd, value] = input[i].split(" ");
      queue.push(value);
  }
}

console.log(answer.join("\n"));
