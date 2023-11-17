var input = require("fs").readFileSync("./bee1005.txt", "utf8");
var lines = input.split("\n");

let n1 = parseFloat(lines[0]);
let n2 = parseFloat(lines[1]);

let resultado = (n1 * 3.5 + n2 * 7.5) / 11;

console.log(`MEDIA = ${resultado.toFixed(5)}`);
