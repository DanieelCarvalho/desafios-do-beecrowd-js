var input = require("fs").readFileSync("./bee1016.txt", "utf8");
var lines = input.split("\n");

let distancia = parseInt(lines[0]);

let resultado = (distancia * 60) / 30;
console.log(`${resultado} minutos`);
