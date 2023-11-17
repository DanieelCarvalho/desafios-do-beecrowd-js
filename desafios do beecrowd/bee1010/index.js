var input = require("fs").readFileSync("./bee1010.txt", "utf8");
var lines = input.split("\n");

let peca1 = lines[0].split(" ");
let peca2 = lines[1].split(" ");
let soma = 0;
let soma2 = 0;

for (let i = 2; i < peca1.length; i++) {
  soma = peca1[1] * peca1[2];
}

for (let i = 2; i < peca2.length; i++) {
  soma2 = peca2[1] * peca2[2];
}
let resultado = soma + soma2;

console.log(`VALOR A PAGAR: R$ ${resultado.toFixed(2)}`);
