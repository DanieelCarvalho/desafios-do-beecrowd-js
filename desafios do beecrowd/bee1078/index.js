var input = require("fs").readFileSync("./bee1078.txt", "utf8");
var lines = input.split("\n");

let N = parseInt(lines[0], 10);

for (let i = 1; i <= 10; i++) {
  console.log(`${i} x ${N} = ${i * N}`);
}
