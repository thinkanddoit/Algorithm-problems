/* eslint-disable no-plusplus */
const input = '()))((()';

function solution(p) {
  function trimAndReverse(w) {
    const wordArray = w.split('');
    wordArray.pop();
    wordArray.shift();
    const reversedWordArray = wordArray.map((char) => {
      return char === '(' ? ')' : '(';
    });
    return reversedWordArray.join('');
  }
  function splitWord(w) {
    // 빈 문자열이 들어올 경우는 없음.
    // algorithm 첫줄에 쓰이기 때문.
    let balance = 0;
    let pointIndex = 0;
    if (w.substr(pointIndex++, 1) === '(') balance++;
    else balance--;

    while (balance) {
      if (w.substr(pointIndex++, 1) === '(') balance++;
      else balance--;
    }
    const u = w.substring(0, pointIndex);
    const v = w.substring(pointIndex);

    return [u, v];
  }
  function isCorrect(w) {
    const Stack = [];
    w.split('').map((char) => {
      if (char === '(') Stack.push(1);
      else Stack.pop();
    });
    return Stack.length === 0;
  }
  function algorithm(w) {
    if (w.length === 0) return w;
    const [u, v] = splitWord(w);
    if (isCorrect(u)) return u + algorithm(v);

    let str = '(';
    str += algorithm(v);
    str += ')';
    str += trimAndReverse(u);

    return str;
  }
  return algorithm(p);
}
console.log(solution(input));
