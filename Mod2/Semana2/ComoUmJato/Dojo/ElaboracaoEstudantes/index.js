var nomes = ["Max", "Mel", "Sol"];
var peso = [35.2, 18.6, 2.5];
var raca = ["Labrador", "Vira latas", "Chiuaua"];

function canil(nomes, peso, raca) {
  for (var i = 0; i < cachorro.length; i++) {
    var cachorro = {
      nome: nomes[i],
      peso: peso[i],
      raca: raca[i],
      latir: function () {
        alert(`${this.nome}: auau`);
      },
      rosnam: function () {
        alert(`${this.nome}: grrrrrr`);
      },
    };
  }
}
