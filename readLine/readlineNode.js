const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('what your name? \n', (ans) => {
  console.log(`Привіт, ${ans}!`);
  rl.close();
});