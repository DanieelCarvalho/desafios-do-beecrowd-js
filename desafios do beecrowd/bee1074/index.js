var input = require("fs").readFileSync("./bee1074.txt", "utf8");
var lines = input.split("\n");

let N = parseInt(lines[0], 10);

let narray = lines.splice(1);

let testes = narray.map((src) => parseInt(src, 10));

for (let i = 0; i < N; i++) {
  if (testes[i] % 2 === 0 && testes[i] > 0) {
    console.log("EVEN POSITIVE");
  } else if (testes[i] % 2 === 0 && testes[i] < 0) {
    console.log("EVEN NEGATIVE");
  } else if (testes[i] % 2 !== 0 && testes[i] > 0) {
    console.log("ODD POSITIVE");
  } else if (testes[i] % 2 !== 0 && testes[i] < 0) {
    console.log("ODD NEGATIVE");
  } else if (testes[i] === Number(0)) {
    console.log("NULL");
  }
}
