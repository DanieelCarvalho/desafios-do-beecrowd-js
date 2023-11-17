var input = require("fs").readFileSync("./bee1176.txt", "utf8");
var lines = input.split("\n");

const T = parseInt(lines[0]);

for (let i = 1; i <= T; i++) {
  const N = parseInt(lines[i]);

  let a = 0;
  let b = 1;

  for (let j = 2; j <= N; j++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  console.log(`Fib(${N}) = ${N === 0 ? 0 : b}`);
}
