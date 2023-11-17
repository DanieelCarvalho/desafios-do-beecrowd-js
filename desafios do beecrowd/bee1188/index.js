var input = require("fs").readFileSync("./bee1188.txt", "utf8");
var lines = input.split("\n");

let i, j;
let letra = lines.shift();

let m = [];
let contador = 0;
let soma = 0;

for (i = 0; i < 12; i++) {
  m[i] = [];
  for (j = 0; j < 12; j++) {
    m[i][j] = parseFloat(lines.shift());
  }
}
let q = 1;

for (i = 7; i <= 11; i++) {
  for (j = 11 - i + 1; j <= i - 1; j++) {
    soma += m[i][j];
    contador++;
  }
}
if (letra === "M") {
  soma /= contador;
}
console.log(soma.toFixed(1));
