var input = require("fs").readFileSync("./bee1019.txt", "utf8");
var lines = input.split("\n");

let num = parseInt(lines[0]);

let ano = parseInt(num / 365);
let resto = parseInt(num % 365);
let mes = parseInt(resto / 30);
let dias = parseInt(resto % 30);
console.log(`${ano} ano(s)`);
console.log(`${mes} mes(es)`);
console.log(`${dias} dia(s)`);
