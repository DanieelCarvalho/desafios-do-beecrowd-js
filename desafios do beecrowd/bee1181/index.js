var input = require("fs").readFileSync("./bee1181.txt", "utf8");
var lines = input.split("\n");
let i;
let j;

let linha = parseInt(lines.shift());
let letra = lines.shift();
let soma = 0;
let elemento = 0;

let M = [];
for (i = 0; i < 12; i++) {
  M[i] = [];
  for (j = 0; j < 12; j++) {
    M[i][j] = parseFloat(lines.shift());
    console.log(M[i][j]);
    if (i === linha) {
      soma += M[i][j];
      elemento++;
    }
  }
}

if (letra === "M") {
  soma /= elemento;
}

console.log(soma.toFixed(1));
