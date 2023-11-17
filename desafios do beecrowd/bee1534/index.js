// var input = require("fs").readFileSync("./bee1534.txt", "utf8");
// var lines = input.split("\n");

// for (let i = 0; i < lines.length; i++) {
//   const cpf = lines[i].trim();

//   if (cpf.length === 14) {
//     console.log(`${cpf[0]}${cpf[1]}${cpf[2]}`);
//     console.log(`${cpf[4]}${cpf[5]}${cpf[6]}`);
//     console.log(`${cpf[8]}${cpf[9]}${cpf[10]}`);
//     console.log(`${cpf[12]}${cpf[13]}`);
//   }
// }

let teste = [25, 1, 30, 2, 7, 5];

// for (let i = 0; i < teste.length - 1; i++) {
//   for (let j = 0; j < teste.length - 1 - i; j++) {
//     if (teste[j] > teste[j + 1]) {
//       // Troca os elementos
//       let temp = teste[j];
//       teste[j] = teste[j + 1];
//       teste[j + 1] = temp;
//     }
//   }
// }
teste.splice(0, 1);
// for (let i = 0; i < teste.length - 1; i++) {
//   console.log(teste[i]);
//   if (teste[i] > teste[i + 1]) {
//     // Troca os elementos
//     let temp = teste[i];
//     teste[i] = teste[i + 1];
//     teste[i + 1] = temp;
//   }
// }

console.log(teste);
