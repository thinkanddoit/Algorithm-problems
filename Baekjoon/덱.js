const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");
const testLineCount = input.shift();
let dequeue = [];
let answer = [];
for (let i = 0; i < testLineCount; i++) {
  switch (input[i]) {
    case "pop_front":
      answer.push(dequeue.length !== 0 ? dequeue.shift() : -1);
      break;
    case "pop_back":
      answer.push(dequeue.length !== 0 ? dequeue.pop() : -1);
      break;
    case "size":
      answer.push(dequeue.length);
      break;
    case "empty":
      answer.push(dequeue.length !== 0 ? 0 : 1);
      break;
    case "front":
      answer.push(dequeue.length !== 0 ? dequeue[0] : -1);
      break;
    case "back":
      answer.push(dequeue.length !== 0 ? dequeue[dequeue.length - 1] : -1);
      break;
    default:
      const [cmd, value] = input[i].split(" ");
      if (cmd === "push_front") dequeue.splice(0, 0, value);
      else dequeue.push(value);
      break;
  }
}

console.log(answer.join("\n"));
