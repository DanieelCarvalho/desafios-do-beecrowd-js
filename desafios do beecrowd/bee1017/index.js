var input = require("fs").readFileSync("./bee1017.txt", "utf8");
var lines = input.split("\n");

let valores = lines[0].split(" ");

let a = parseFloat(valores[0]);
let b = parseFloat(valores[1]);
let c = parseFloat(valores[2]);

let multi = 4 * a * c;
let delta = Math.pow(b, 2) - multi;

let eq1 = (-b + Math.sqrt(delta)) / (2 * a);
let eq2 = (-b - Math.sqrt(delta)) / (2 * a);

if (a == 0 || b == 0 || c == 0 || delta < 0) {
  console.log("Impossivel calcular");
} else {
  console.log(`R1 = ${eq1.toFixed(5)}`);
  console.log(`R2 = ${eq2.toFixed(5)}`);
}

// x = -b +- Math.sqrt(b² - 4.a.c) /2*a
