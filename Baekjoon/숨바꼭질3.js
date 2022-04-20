const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [n, k] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(getMinTime(n, k));

function getMinTime(from, to) {
  if (from >= to) {
    return from - to;
  }

  const MAX = 100000;
  const visited = new Array(MAX + 1);
  const queue = [from];
  visited[from] = 0;
  let head = 0;

  while (queue.length > head) {
    const current = queue[head++];

    if (current === to) return visited[current];

    for (let next of [2 * current, current + 1, current - 1]) {
      if (isAvailable(next)) {
        visited[next] =
          next === 2 * current ? visited[current] : visited[current] + 1;
        queue.push(next);
      }
    }
  }
  function isAvailable(num) {
    return num >= 0 && num <= MAX && !visited[num];
  }
}

// const [start, end] = require("fs")
//   .readFileSync(path)
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);

// const deque = [[start, 0]];
// const visited = [];
// visited[start] = true;

// const MAX = 100000;

// function dfs() {
//   if (start >= end) return start - end;
//   while (deque.length) {
//     const [current, time] = deque.shift();
//     const CASE = [current * 2, current + 1, current - 1];
//     if (current === end) {
//       return time;
//     }

//     for (let i = 0; i < CASE.length; i++) {
//       if (visited[CASE[i]] || CASE[i] > MAX || CASE[i] < 0) continue;
//       if (i === 0) {
//         deque.unshift([CASE[i], time]);
//       } else {
//         deque.push([CASE[i], time + 1]);
//       }
//       visited[CASE[i]] = true;
//     }
//   }
// }

// console.log(dfs());
