var input = require("fs").readFileSync("./bee1004.txt", "utf8");
var lines = input.split("\n");

let n1 = parseInt(lines[0]);
let n2 = parseInt(lines[1]);

let resultado = n1 * n2;

console.log(`PROD = ${resultado}`);
