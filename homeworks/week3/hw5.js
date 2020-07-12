// 基本架構
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function compare(n1, n2) {
  const a = n1.length;
  const b = n2.length;
  if (a === b) {
    for (let j = 0; j < a; j += 1) {
      if (n1[j] !== n2[j]) return (n1[j] > n2[j]);
    }
  }
  return (a > b);
}

function solve(input) {
  for (let i = 1; i < input.length; i += 1) {
    const temp = input[i].split(' ');
    if (temp[0] === temp[1]) {
      console.log('DRAW');
    } else if (temp[2] === '1') {
      console.log(compare(temp[0], temp[1]) ? 'A' : 'B');
    } else {
      console.log(compare(temp[0], temp[1]) ? 'B' : 'A');
    }
  }
}

rl.on('close', () => {
  solve(lines);
});
