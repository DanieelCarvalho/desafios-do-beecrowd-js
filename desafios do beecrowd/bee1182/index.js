var input = require("fs").readFileSync("./bee1182.txt", "utf8");
var lines = input.split("\n");
let i;
let j;

let coluna = parseInt(lines.shift());
let letra = lines.shift();
let soma = 0;
let elemento = 0;
let M = [];

for (i = 0; i < 12; i++) {
  M[i] = [];
  for (j = 0; j < 12; j++) {
    M[i][j] = parseFloat(lines.shift());

    if (j === coluna) {
      soma += M[i][j];
      elemento++;
    }
  }
}

if (letra === "M") {
  soma /= elemento;
}
console.log(soma.toFixed(1));
