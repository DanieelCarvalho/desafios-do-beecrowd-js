var input = require("fs").readFileSync("./bee1190.txt", "utf8");
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

for (i = 1; i <= 10; i++) {
  if (i <= 5) {
    for (j = 11; j > 11 - i; j--) {
      soma += m[i][j];
      contador++;
    }
  } else {
    for (j = 11; j >= i + 1; j--) {
      soma += m[i][j];
      contador++;
    }
  }
}

if (letra === "M") {
  soma /= contador;
}
console.log(soma.toFixed(1));
