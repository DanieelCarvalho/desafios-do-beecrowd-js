var input = require("fs").readFileSync("./bee1185.txt", "utf8");
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
for (i = 0; i <= 10; i++) {
  for (j = 0; j <= 10 - i; j++) {
    soma += m[i][j];
    contador++;
  }
}
if (letra === "M") {
  soma /= contador;
}
console.log(soma.toFixed(1));
