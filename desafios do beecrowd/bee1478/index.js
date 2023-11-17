var input = require("fs").readFileSync("./bee1478.txt", "utf8");
var lines = input.split("\n");

while (true) {
  var N = parseInt(lines.shift());

  if (N === 0) {
    break;
  }
  var matriz = [];
  for (var i = 0; i < N; i++) {
    matriz.push([]);
    for (var j = 0; j < N; j++) {
      matriz[i].push(Math.abs(i - j) + 1);
    }
  }
  for (var i = 0; i < N; i++) {
    var row = "";
    for (var j = 0; j < N; j++) {
      row += matriz[i][j].toString().padStart(3, " ");
      if (j < N - 1) {
        row += " ";
      }
    }
    console.log(row);
  }
  console.log("");
}
