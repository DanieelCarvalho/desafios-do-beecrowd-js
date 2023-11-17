var input = require("fs").readFileSync("./bee1095.txt", "utf8");
var lines = input.split("\n");

for (let i = 60, j = 1; i >= 0; i = i - 5, j += 3) {
  console.log(`I=${j} J=${i}`);
}
