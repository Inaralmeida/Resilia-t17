// var numeroUm = parseInt(prompt("Digite o primeiro número"));
// var numeroDois = parseInt(prompt("Digite o segundo número"));

function somar(primeiroNumero, segundoNumero) {
  var resultado = primeiroNumero + segundoNumero;
  return resultado;
}

// console.log(somar(numeroUm, numeroDois));

function dizerOla() {
  return "olá";
}

// dizerOla();

// var conceito;
// // nota = prompt("Digite a nota");
// if (nota >= 9) {
//   conceito = "A";
// } else if (nota >= 8) {
//   conceito = "B";
// } else if (nota >= 6) {
//   conceito = "C";
// } else if (nota >= 4) {
//   conceito = "D";
// } else {
//   conceito = "E";
// }
// console.log(conceito);

// function verificaConceito(nota) {
//   var conceito;
//   if (nota >= 9) {
//     conceito = "A";
//   } else if (nota >= 8) {
//     conceito = "B";
//   } else if (nota >= 6) {
//     conceito = "C";
//   } else if (nota >= 4) {
//     conceito = "D";
//   } else {
//     conceito = "E";
//   }
//   console.log(conceito);
// }

function fazerCafe(item1, item2, item3) {
  if (item1 == "café" && item2 == "agua" && item3 == "açucar") {
    return "Café gostoso";
  } else if (item1 == "café" && item2 == "agua" && item3 == "adoçante") {
    return "Café é sempre bom";
  } else {
    return "Estreguei o pó de café";
  }
}

console.log(fazerCafe("café", "agua", "açucar"));
console.log(fazerCafe("café", "agua", "adoçante"));
