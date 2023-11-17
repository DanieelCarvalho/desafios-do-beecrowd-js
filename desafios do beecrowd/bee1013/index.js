var input = require("fs").readFileSync("./bee1013.txt", "utf8");
var lines = input.split("\n");

let dados = lines[0].split(" ");
let n1 = parseInt(dados[0]);
let n2 = parseInt(dados[1]);
let n3 = parseInt(dados[2]);

let abs = parseInt(Math.abs(n1 - n2));
let maiorAb = (n1 + n2 + abs) / 2;

maiorAb > n3
  ? console.log(`${maiorAb} eh o maior`)
  : console.log(`${n3} eh o maior`);
