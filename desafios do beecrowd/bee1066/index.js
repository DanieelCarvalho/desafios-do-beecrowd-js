var input = require("fs").readFileSync("./bee1066.txt", "utf8");
var lines = input.split("\n");

let num = lines.map((str) => parseInt(str, 10));
let par = 0;
let impar = 0;
let positivo = 0;
let negativo = 0;

for (let i = 0; i < 5; i++) {
  if (num[i] % 2 === 0) {
    par++;
  } else {
    impar++;
  }
  if (num[i] > 0) {
    positivo++;
  } else if (num[i] < 0) {
    negativo++;
  }
}

console.log(`${par} valor(es) par(es)`);
console.log(`${impar} valor(es) impar(es)`);
console.log(`${positivo} valor(es) positivo(s)`);
console.log(`${negativo} valor(es) negativo(s)`);
