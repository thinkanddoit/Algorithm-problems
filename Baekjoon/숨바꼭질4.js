const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const [start, end] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const queue = [[start, 0]];
const visitChecker = [];
const pathStore = [];

visitChecker[start] = true;
pathStore[start] = -1;

const MAX = 100000;

//dfs를 이용해서 지나온 경로를 배열로 계속해서 저장하니 메모리 초과 오류가 발생했다.
//따라서 배열을 하나 더 생성하여 이전 위치의 인덱스를 저장하고 순서대로 찾아? 이용해서 해당 경로를 구해준다.

function dfs() {
  while (queue.length) {
    const [current, time] = queue.shift();
    if (current === end) return time;
    for (next of [current + 1, current - 1, current * 2]) {
      if (visitChecker[next] || next > MAX || next < 0) continue;
      queue.push([next, time + 1]);
      pathStore[next] = current;
      visitChecker[next] = true;
    }
  }
}

function findPath() {
  let index = end;
  const reversePath = [];
  while (true) {
    if (index === -1) {
      return reversePath.reverse();
    }
    reversePath.push(index);
    index = pathStore[index];
  }
}

console.log(dfs());
console.log(findPath().join(" "));
