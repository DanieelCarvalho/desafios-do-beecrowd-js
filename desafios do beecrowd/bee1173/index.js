var input = require("fs").readFileSync("./bee1173.txt", "utf8");
var lines = input.split("\n");

let x = parseInt(lines[0], 10);
let n = [];

for (let i = 0; i < 10; i++) {
  n.push(x);
  console.log(`N[${[i]}] = ${n[i]}`);
  x = x + x;
}
