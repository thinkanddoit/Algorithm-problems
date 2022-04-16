const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const targetNumber = +require("fs").readFileSync(path).toString().trim();

const MAX_SIZE = 1000;
const visited = Array(MAX_SIZE + 1)
  .fill()
  .map(() => Array(MAX_SIZE + 1).fill(false));

console.log(dfs(targetNumber));
function dfs(target) {
  const queue = [[1, 0, 0]];
  visited[1][0] = true;

  while (queue.length) {
    const [current, clipBoard, time] = queue.shift();
    if (current <= 0 || current > MAX_SIZE) continue;
    if (current === target) return time;

    //1 복사 저장
    if (!visited[current][current]) {
      queue.push([current, current, time + 1]);
      visited[current][current] = true;
    }
    //2 붙여넣기
    if (
      !!clipBoard &&
      current + clipBoard <= MAX_SIZE &&
      !visited[current + clipBoard][clipBoard]
    ) {
      queue.push([current + clipBoard, clipBoard, time + 1]);
      visited[current + clipBoard][clipBoard] = true;
    }
    //3 한개삭제
    if (!visited[current - 1][clipBoard]) {
      queue.push([current - 1, clipBoard, time + 1]);
      visited[current - 1][clipBoard] = true;
    }
  }
}
