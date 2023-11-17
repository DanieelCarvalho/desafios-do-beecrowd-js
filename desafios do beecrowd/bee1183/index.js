var input = require("fs").readFileSync("./bee1183.txt", "utf8");
var lines = input.split("\n");
let i;
let j;

let letra = lines.shift();
let soma = 0;
let elemento = 0;
let m = [];
for (i = 0; i < 12; i++) {
  m[i] = [];
  for (j = 0; j < 12; j++) {
    m[i][j] = parseFloat(lines.shift());

    if (j > i) {
      soma += m[i][j];
      elemento++;
    }
  }
}

if (letra === "M") {
  soma /= elemento;
}
console.log(soma.toFixed(1));
