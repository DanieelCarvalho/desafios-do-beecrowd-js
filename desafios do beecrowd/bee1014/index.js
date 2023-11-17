var input = require("fs").readFileSync("./bee1014.txt", "utf8");
var lines = input.split("\n");

let x = parseInt(lines[0]);
let y = parseFloat(lines[1]);

let mediaConsumo = x / y;
console.log(`${mediaConsumo.toFixed(3)} km/l`);
