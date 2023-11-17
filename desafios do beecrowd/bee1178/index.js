var input = require("fs").readFileSync("./bee1178.txt", "utf8");
var lines = input.split("\n");

let x = parseFloat(lines[0]).toFixed(4);

let n = [];

for (let i = 0; i < 100; i++) {
  if (i === 0) {
    n[i] = x;
  } else {
    n[i] = n[i - 1] / 2;
  }
  console.log(
    `N[${i}] = ${n[i].toLocaleString("en-US", {
      minimumFractionDigits: 4,
      useGrouping: false,
    })}`
  );
}
