var input = require("fs").readFileSync("./bee1064.txt", "utf8");
var lines = input.split("\n");

let teste = lines.map(Number);
let contador = 0;
let soma = 0;

for (let i = 0; i < teste.length; i++) {
  if (lines[i] > 0) {
    contador++;
    soma += teste[i];
  }
}
let media = soma / contador;

console.log(`${contador} valores positivos`);
console.log(media.toFixed(1));
