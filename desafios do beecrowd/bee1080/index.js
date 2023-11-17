var input = require("fs").readFileSync("./bee1080.txt", "utf8");
var lines = input.split("\n");

let int = lines.map((srt) => parseInt(srt, 10));

let maior = 0;
let posicao = 0;

for (let i = 0; i < int.length; i++) {
  if (int[i] > maior) {
    maior = lines[i];
    posicao = i;
  }
}
console.log(maior);
console.log(posicao + 1);
