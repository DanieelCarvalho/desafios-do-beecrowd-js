var input = require("fs").readFileSync("./bee1180.txt", "utf8");
var lines = input.split("\n");

let n = parseInt(lines[0]);
let dados = lines[1].split(" ").map(function (e) {
  return parseInt(e);
});

let x = [];
for (let i = 0; i < n; i++) {
  x.push(dados[i]);
}

let menor = x[0];
let posicao = 0;

for (let i = 0; i < x.length; i++) {
  if (x[i] < menor) {
    menor = x[i];
    posicao = i;
  }
}

console.log(`Menor valor: ${menor}`);
console.log(`Posicao: ${posicao}`);
