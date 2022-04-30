// 문제파악
// 몇개 단위로 잘라서 압축 하는 것이 가장 짧은 결과물을 도출하는지 ..
// 무식하게 다해보는 방법?
// 1. 문자열을 몇개 단위로 모두 자른다. (이것은 문자열길이/2 까지 모두 시행?)
// 2. 같은 모양의 문자열이 반복되는 경우를 파악한다?
// 3. 문자열의 길이를 계산해서 저장한다.

const input = 'aabbaccc';

function solution(s) {
  const inputLength = s.length;
  let answer = inputLength;

  for (let i = 1; i <= Math.floor(inputLength / 2); i++) {
    let str = '';
    let cnt = 1;
    let tempStr = s.substr(0, i);
    let idx = 0;
    for (idx = i; idx <= inputLength; idx += i) {
      const nextStr = s.substr(idx, i);
      if (tempStr === nextStr) cnt += 1;
      else {
        if (cnt === 1) str += tempStr;
        else str = str + cnt + tempStr;

        cnt = 1;
        tempStr = nextStr;
      }
    }
    if (cnt === 1) str += tempStr;
    else str = str + cnt + tempStr;
    answer = Math.min(answer, str.length);
  }
  return answer;
}

console.log(solution(input));
