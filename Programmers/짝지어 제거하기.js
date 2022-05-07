const input = 'baabaa';

function solution(s) {
  const Stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!Stack.length || Stack[Stack.length - 1] !== s[i]) Stack.push(s[i]);
    else Stack.pop();
  }
  return Stack.length ? 0 : 1;
}

console.log(solution(input));
