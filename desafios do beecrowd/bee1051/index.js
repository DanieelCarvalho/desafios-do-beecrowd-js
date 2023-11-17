var input = require("fs").readFileSync("./bee1051.txt", "utf8");
var lines = input.split("\n");

let renda = parseFloat(lines[0]);
let imposto = parseFloat;

if (renda > 0 && renda <= 2000.0) {
  console.log("Isento");
} else if (renda >= 2000.01 && renda <= 3000.0) {
  imposto = (renda - 2000.0) * 0.08;
  console.log(`R$ ${imposto.toFixed(2)}`);
} else if (renda >= 3000.01 && renda <= 4500.0) {
  imposto = (renda - 3000.0) * 0.18 + 1000.0 * 0.08;
  console.log(`R$ ${imposto.toFixed(2)}`);
} else if (renda > 4500.0) {
  imposto = (renda - 4500.0) * 0.28 + 1500 * 0.18 + 1000 * 0.08;
  console.log(`R$ ${imposto.toFixed(2)}`);
}
