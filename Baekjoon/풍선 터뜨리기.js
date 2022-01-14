const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");

const testNumber = Number(input.shift());
let numbers = input[0].split(" ").map((x) => Number(x));

let answer = [];

class Deque {
  constructor() {
    this.front = this.back = undefined;
  }
  push_front(value) {
    if (!this.front) this.front = this.back = { value };
    else this.front = this.front.next = { value, prev: this.front };
  }
  pop_front() {
    let value = this.peek_front();
    if (this.front === this.back) this.front = this.back = undefined;
    else (this.front = this.front.prev).next = undefined;
    return value;
  }
  peek_front() {
    return this.front && this.front.value;
  }
  push_back(value) {
    if (!this.front) this.front = this.back = { value };
    else this.back = this.back.prev = { value, next: this.back };
  }
  pop_back() {
    let value = this.peek_back();
    if (this.front === this.back) this.front = this.back = undefined;
    else (this.back = this.back.next).back = undefined;
    return value;
  }
  peek_back() {
    return this.back && this.back.value;
  }
}

let deque = new Deque();
numbers.map((x, i) => deque.push_back([i + 1, x]));
while (true) {
  let cnt = deque.front.value[1];
  answer.push(deque.front.value[0]);
  deque.pop_front();
  if (answer.length === numbers.length) break;
  if (cnt > 0) {
    for (let i = 0; i < cnt - 1; i++) {
      deque.push_back(deque.front.value);
      deque.pop_front();
    }
  } else {
    for (let i = cnt; i < 0; i++) {
      deque.push_front(deque.back.value);
      deque.pop_back();
    }
  }
}

console.log(answer.join(" "));
