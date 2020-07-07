// 基本架構
const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

/* eslint-disable no-unused-vars */
/* eslint no-plusplus: "error" */
function solve(n) {
  let result = '';
  for (let i = 1; i < n + 1; i += 1) {
    result += '*';
    console.log(result);
  }
}

rl.on('close', () => {
  solve(lines);
});
