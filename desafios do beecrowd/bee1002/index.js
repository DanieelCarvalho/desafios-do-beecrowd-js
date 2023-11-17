var input = require("fs").readFileSync("./bee1002.txt", "utf8");
var lines = input.split("\n");

let N = 3.14159;

let raio = parseFloat(lines[0]);

let area = N * (raio * raio);

console.log(`A=${area.toFixed(4)}`);
