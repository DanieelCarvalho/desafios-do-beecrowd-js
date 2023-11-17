var input = require("fs").readFileSync("./bee1070.txt", "utf8");
var lines = input.split("\n");

let num = parseInt(lines[0], 10);

for (let i = num; i < num + 12; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
