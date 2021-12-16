const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";

const input = require("fs").readFileSync(path).toString().trim().split("\n");
input.shift();

input.sort((a, b) => parseFloat(a) - parseFloat(b));

console.log(input.join("\n"));

// parseFloat()
// 수로 시작할 때 그 수를 실수로 바꿉니다.
// 띄어 쓰기로 여러 개의 수가 있으면 첫번째 수만 바꿉니다.
// 공백으로 시작하면 공백은 무시합니다.
// 수가 아닌 문자로 시작하면 NaN을 반환합니다.
