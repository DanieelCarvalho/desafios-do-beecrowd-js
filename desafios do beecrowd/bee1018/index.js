var input = require("fs").readFileSync("./bee1018.txt", "utf8");
var lines = input.split("\n");

let num = parseInt(lines[0]);

let nota100 = parseInt(num / 100);
let resto = num % 100;

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

let nota1 = parseInt(resto / 1);
resto = resto % 1;
console.log(num);
console.log(`${nota100} nota(s) de R$ 100,00`);
console.log(`${nota50} nota(s) de R$ 50,00`);
console.log(`${nota20} nota(s) de R$ 20,00`);
console.log(`${nota10} nota(s) de R$ 10,00`);
console.log(`${nota5} nota(s) de R$ 5,00`);
console.log(`${nota2} nota(s) de R$ 2,00`);
console.log(`${nota1} nota(s) de R$ 1,00`);
