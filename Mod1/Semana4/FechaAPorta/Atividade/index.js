function criarLista() {
  var qtdItens = parseInt(prompt("Quantos Itens desejaadd na lista"));
  var lista = [];

  while (lista.length !== qtdItens) {
    var elemento = prompt("Qual é o elemento?");

    if (elemento.length % 2 !== 0) {
      lista.push(elemento);
      alert(`elemento ${elemento} adicionado a lista`);
    } else {
      alert("Elemento invalido");
    }
  }
  console.log(lista);
}

criarLista();
