var input = require("fs").readFileSync("./bee1065.txt", "utf8");
var lines = input.split("\n");

let contador = 0;
let num = [];
for (let i = 0; i < lines.length; i++) {
  num.push(parseInt(lines[i], 10));
  if (num[i] % 2 === 0) {
    contador++;
  }
}

console.log(`${contador} valores pares`);
