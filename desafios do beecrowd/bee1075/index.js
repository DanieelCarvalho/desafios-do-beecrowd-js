var input = require("fs").readFileSync("./bee1075.txt", "utf8");
var lines = input.split("\n");

let N = parseInt(lines[0], 10);

for (let i = 1; i < 10000; i++) {
  i % N === 2 ? console.log(i) : null;
}
