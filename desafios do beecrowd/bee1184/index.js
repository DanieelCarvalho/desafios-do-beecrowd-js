var input = require("fs").readFileSync("./bee1184.txt", "utf8");
var lines = input.split("\n");

let i, j;

let letra = lines.shift();
let soma = 0;
let contador = 0;

let m = [];
for (i = 0; i < 12; i++) {
  m[i] = [];
  for (j = 0; j < 12; j++) {
    m[i][j] = parseFloat(lines.shift());
    if (j < i) {
      soma += m[i][j];
      contador++;
    }
  }
}
if (letra === "M") {
  soma /= contador;
}

console.log(soma.toFixed(1));
