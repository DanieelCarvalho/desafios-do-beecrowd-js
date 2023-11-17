var input = require("fs").readFileSync("./bee1172.txt", "utf8");
var lines = input.split("\n");

let x = lines.map(Number);

for (let i = 0; i < x.length; i++) {
  if (x[i] < 0 || x[i] === 0) {
    x[i] = 1;
  }
  console.log(`X[${[i]}] = ${x[i]}`);
}
