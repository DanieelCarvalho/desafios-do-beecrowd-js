var input = require("fs").readFileSync("./bee1015.txt", "utf8");
var lines = input.split("\n");

let p1 = lines[0].split(" ");
let p2 = lines[1].split(" ");
let x1 = parseFloat(p1[0]);
let y1 = parseFloat(p1[1]);

let x2 = parseFloat(p2[0]);
let y2 = parseFloat(p2[1]);
let valor1 = Math.pow(x2 - x1, 2);
let valor2 = Math.pow(y2 - y1, 2);

let resultado = Math.sqrt(valor1 + valor2);

console.log(resultado.toFixed(4));
