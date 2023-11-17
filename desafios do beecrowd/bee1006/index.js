var input = require("fs").readFileSync("./bee1006.txt", "utf8");
var lines = input.split("\n");

let n1 = parseFloat(lines[0]);
let n2 = parseFloat(lines[1]);
let n3 = parseFloat(lines[2]);

let media = (n1 * 2 + n2 * 3 + n3 * 5) / 10;

console.log(`MEDIA = ${media.toFixed(1)}`);
