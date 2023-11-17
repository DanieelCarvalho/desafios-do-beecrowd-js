var input = require("fs").readFileSync("./bee1177.txt", "utf8");
var lines = input.split("\n");

let t = parseInt(lines[0]);

let n = new Array(1000);
let i, j;

for (i = 0; i < 1000; ) {
  for (j = 0; j < t; j++) {
    n[i] = j;
    i++;
  }
}

for (i = 0; i < 1000; i++) {
  console.log(`N[${i}] = ${n[i]}`);
}
