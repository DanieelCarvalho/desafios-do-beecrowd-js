var input = require("fs").readFileSync("./bee1094.txt", "utf8");
var lines = input.split("\n");

let N = parseInt(lines[0]);
let cobaias = [];
cobaias = lines.splice(1);
let dados = [];
let dados2 = [];
let numCobaias = [];
let totalC = 0;
let totalR = 0;
let totalS = 0;
let total = 0;
let letras = "";

for (let i = 0; i < N; i++) {
  dados = cobaias[i].split(" ");
  numCobaias = dados.map((src) => parseInt(src, 10));
  letras = dados[1];

  total += numCobaias[0];

  switch (letras[0]) {
    case "C":
      totalC += numCobaias[0];
      break;
    case "R":
      totalR += numCobaias[0];
      break;

    case "S":
      totalS += numCobaias[0];
      break;
  }
}
let porcentagemC = parseFloat((totalC * 100.0) / total);
let porcentagemR = parseFloat((totalR * 100.0) / total);
let porcentagemS = parseFloat((totalS * 100.0) / total);

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${totalC}`);
console.log(`Total de ratos: ${totalR}`);
console.log(`Total de sapos: ${totalS}`);
console.log(`Percentual de coelhos: ${porcentagemC.toFixed(2)} %`);
console.log(`Percentual de ratos: ${porcentagemR.toFixed(2)} %`);
console.log(`Percentual de sapos: ${porcentagemS.toFixed(2)} %`);
