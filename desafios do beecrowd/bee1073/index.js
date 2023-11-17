var input = require("fs").readFileSync("./bee1073.txt", "utf8");
var lines = input.split("\n");

let N = parseInt(lines[0], 10);

for (let i = 1; i <= N; i++) {
  if (i % 2 === 0) {
    console.log(i + "^" + 2 + " = " + Math.pow(i, 2));
  }
}
