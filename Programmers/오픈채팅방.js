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
