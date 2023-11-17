var input = require("fs").readFileSync("./bee1021.txt", "utf8");
var lines = input.split("\n");

let num = parseFloat(lines[0]);

let nota100 = parseInt(num / 100);
let resto = parseFloat(num % 100);

let nota50 = parseInt(resto / 50);
resto = resto % 50;

let nota20 = parseInt(resto / 20);
resto = resto % 20;

let nota10 = parseInt(resto / 10);
resto = resto % 10;

let nota5 = parseInt(resto / 5);
resto = resto % 5;

let nota2 = parseInt(resto / 2);
resto = resto % 2;

let moeda1 = parseInt(resto / 1);
resto = resto % 1;

let moeda50 = parseInt(resto / 0.5);
resto = resto % 0.5;

let moeda25 = parseInt(resto / 0.25);
resto = resto % 0.25;

let moeda10 = parseInt(resto / 0.1);
resto = resto % 0.1;

let moeda5 = parseInt(resto / 0.05);
resto = resto % 0.05;

let moeda01 = parseInt(resto.toFixed(2) / 0.01);

console.log("NOTAS:");
console.log(`${nota100} nota(s) de R$ 100.00`);
console.log(`${nota50} nota(s) de R$ 50.00`);
console.log(`${nota20} nota(s) de R$ 20.00`);
console.log(`${nota10} nota(s) de R$ 10.00`);
console.log(`${nota5} nota(s) de R$ 5.00`);
console.log(`${nota2} nota(s) de R$ 2.00`);
console.log("MOEDAS:");
console.log(`${moeda1} moeda(s) de R$ 1.00`);
console.log(`${moeda50} moeda(s) de R$ 0.50`);
console.log(`${moeda25} moeda(s) de R$ 0.25`);
console.log(`${moeda10} moeda(s) de R$ 0.10`);
console.log(`${moeda5} moeda(s) de R$ 0.05`);
console.log(`${moeda01} moeda(s) de R$ 0.01`);
