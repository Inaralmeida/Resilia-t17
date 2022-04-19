var feira = ["pera", "banana", "maça", "uva", "melancia", "kiwi"];

for (var i = 0; i < feira.length; i++) {
  console.log(feira[i]);
}

var gastos = [
  [32.98, 17.3, 28.4, 55.2], //gastos[0][1]
  [25.7, 17.13, 13.0],
];

for (var i = 0; i < gastos.length; i++) {
  var totalGastoNaSemana = 0;
  console.log(gastos[i]);
  for (var j = 0; j < gastos[i].length; j++) {
    var valorDoDia = gastos[i][j];
    totalGastoNaSemana += valorDoDia;
  }
}
