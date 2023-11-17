var input = require("fs").readFileSync("./bee1067.txt", "utf8");
var lines = input.split("\n");

let num = parseInt(lines[0], 10);

for (let i = 1; i <= num; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
