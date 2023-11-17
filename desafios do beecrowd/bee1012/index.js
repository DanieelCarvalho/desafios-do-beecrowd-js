var input = require("fs").readFileSync("./bee1012.txt", "utf8");
var lines = input.split("\n");

let dados = lines[0].split(" ");
let a, b, c;
a = parseFloat(dados[0]);
b = parseFloat(dados[1]);
c = parseFloat(dados[2]);

let PI = 3.14159;

let areaTriangulo = (a * c) / 2;
let areaCirculo = PI * Math.pow(c, 2);
let areaTrapezio = ((a + b) * c) / 2;
let areaQuadrado = Math.pow(b, 2);
let areaRetangulo = b * a;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);
