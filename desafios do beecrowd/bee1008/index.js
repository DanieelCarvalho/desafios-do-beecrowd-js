var input = require("fs").readFileSync("./bee1008.txt", "utf8");
var lines = input.split("\n");

let funcionario = parseInt(lines[0]);

let horaTrabalhada = parseInt(lines[1]);

let valorHora = parseFloat(lines[2]);

let result = horaTrabalhada * valorHora;

console.log(`NUMBER = ${funcionario}`);

console.log(`SALARY = U$ ${result.toFixed(2)}`);
