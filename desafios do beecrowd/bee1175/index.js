var input = require("fs").readFileSync("./bee1175.txt", "utf8");
var lines = input.split("\n");

let copia = lines.slice();
let copiaInt = copia.map(Number);
let reverse = copiaInt.reverse();

for (let i = 0; i < reverse.length; i++) {
  console.log(`N[${i}] = ${reverse[i]}`);
}
