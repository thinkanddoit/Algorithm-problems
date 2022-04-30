const input = [
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
];

function solution(record) {
  let result = [];
  const idToNameMap = new Map();

  function printCommand(command, userId) {
    if (command === 'Enter')
      return `${idToNameMap.get(userId)}님이 들어왔습니다.`;
    return `${idToNameMap.get(userId)}님이 나갔습니다.`;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const command of record) {
    const [cmd, id, name] = command.split(' ');
    if (cmd === 'Enter' || cmd === 'Leave') result.push([cmd, id]);
    if (name) idToNameMap.set(id, name);
  }
  result = result.map((cmd) => printCommand(cmd[0], cmd[1]));
  return result;
}

solution(input);

// 더 좋은 풀이 연습

function solution2(record) {
  const userInfo = {};
  const action = [];
  const stateMapping = {
    Enter: '님이 들어왔습니다.',
    Leave: '님이 나갔습니다.',
  }; // 이 부분이 내가 생각해뒀던 부분..

  record.forEach((v) => {
    const [state, id, nick] = v.split(' ');

    if (state !== 'Change') {
      action.push([state, id]);
    }

    if (nick) {
      userInfo[id] = nick;
    }
  });

  return action.map(([state, uid]) => {
    return `${userInfo[uid]}${stateMapping[state]}`;
  });
}
