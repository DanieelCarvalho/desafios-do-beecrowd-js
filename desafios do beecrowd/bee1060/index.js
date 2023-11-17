var input = require("fs").readFileSync("./bee1060.txt", "utf8");
var lines = input.split("\n");

let contador = 0;
for (let i = 0; i < lines.length; i++) {
  if (lines[i] > 0) {
    contador++;
  }
}
console.log(`${contador} valores positivos`);
