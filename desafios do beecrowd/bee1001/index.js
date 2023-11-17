var input = require("fs").readFileSync("./bee1001.txt", "utf8");
var lines = input.split("\n");

let A = Number(lines[0]);
let B = Number(lines[1]);

let resultado = A + B;

console.log(`X = ${resultado}`);
