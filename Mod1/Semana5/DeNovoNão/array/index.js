//sorteio específico
var sorteio54454 = [12, 32, 45, 60, 42, 7];
//histório dos sorteios
var sorteios = [
  [32, 15, 27, 55, 12, 38],
  [25, 17, 13, 22, 06, 01],
  [16, 18, 15, 38, 23, 29],
];

console.log(sorteios[0]); //SAÍDA: [32, 15, 27, 55, 12, 38]
console.log(sorteios[0][0]); //SAÍDA: 32

//splice
/*Recebe dois parametros
  1 - O numero da posição em que os itens começaram a ser removidos
  2 - A quantidade de itens que serão retirados */

var feira = ["pera", "banana", "maça", "uva", "melancia", "kiwi"];

//Para remover maça, uva e melancia
var removidos = feira.splice(2, 3);

console.log("Feira atualizada: ", feira);
console.log("Lista de removidos ", removidos);
