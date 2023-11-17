var input = require("fs").readFileSync("./bee1174.txt", "utf8");
var lines = input.split("\n");

let a = lines.map(parseFloat);

for (let i = 0; i < a.length; i++) {
  if (a[i] <= 10) {
    console.log(`A[${[i]}] = ${a[i].toFixed(1)}`);
  }
}
