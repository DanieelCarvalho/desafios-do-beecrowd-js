var input = require("fs").readFileSync("./bee1179.txt", "utf8");
var lines = input.split("\n");

let dados = lines.map(function (numero) {
  return parseInt(numero);
});

let par = [];
let impar = [];

for (let i = 0; i < dados.length; i++) {
  if (dados[i] % 2 === 0) {
    par.push(dados[i]);
    if (par.length === 5) {
      for (let i = 0; i < par.length; i++) {
        console.log(`par[${i}] = ${par[i]}`);
      }
      par = [];
    }
  } else {
    impar.push(dados[i]);
  }
  if (impar.length === 5) {
    for (let i = 0; i < impar.length; i++) {
      console.log(`par[${i}] = ${impar[i]}`);
    }
    par = [];
  }
}
for (let i = 0; i < impar.length; i++) {
  console.log(`impar[${i}] = ${impar[i]}`);
}

for (let i = 0; i < par.length; i++) {
  console.log(`par[${i}] = ${par[i]}`);
}
