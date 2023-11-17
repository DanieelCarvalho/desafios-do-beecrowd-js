var input = require("fs").readFileSync("./bee1072.txt", "utf8");
var lines = input.split("\n");

let N = parseInt(lines[0], 10);

let testes = lines.splice(1);

testeInt = testes.map((srt) => parseInt(srt, 10));

let In = 0;
let out = 0;

for (let i = 0; i < N; i++) {
  if (testeInt[i] >= 10 && testeInt[i] <= 20) {
    In++;
  } else {
    out++;
  }
}

console.log(`${In} in`);
console.log(`${out} out`);
