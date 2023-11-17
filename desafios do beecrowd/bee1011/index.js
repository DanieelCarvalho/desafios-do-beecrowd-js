var input = require("fs").readFileSync("./bee1011.txt", "utf8");
var lines = input.split("\n");

let PI = 3.14159;

let raio = parseFloat(lines[0]).toFixed(2);

let resultado = (4 / 3.0) * PI * Math.pow(raio, 3);
console.log(`VOLUME = ${resultado.toFixed(3)}`);
