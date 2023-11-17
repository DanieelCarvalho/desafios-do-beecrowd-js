var input = require("fs").readFileSync("./bee1132.txt", "utf8");
var lines = input.split("\n");

let x = parseInt(lines[0]);
let y = parseInt(lines[1]);
let aux = 0;
let soma = 0;
if (x > y) {
  aux = y;
  y = x;
  x = aux;

  for (let i = aux; i <= y; i++) {
    if (i % 13 != 0) {
      soma += i;
    }
  }
} else {
  for (let i = x; i <= y; i++) {
    if (i % 13 != 0) {
      soma += i;
    }
  }
}
console.log(soma);
