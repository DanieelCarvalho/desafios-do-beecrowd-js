var input = require("fs").readFileSync("./bee1009.txt", "utf8");
var lines = input.split("\n");

let nome = lines[0];

let salario = parseFloat(lines[1]);

let vendas = parseFloat(lines[2]);

let porcentagem = vendas * 0.15;

let resultado = salario + porcentagem;

console.log(`TOTAL = R$ ${resultado.toFixed(2)}`);
