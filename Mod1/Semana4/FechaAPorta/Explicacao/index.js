//DECLARAÇÃO
// var listaDeConvidados = []; // ESSA É A FORMA MAIS UTILIZADA
// var listaDeBanidos = new Array();

//INICIALIZAÇÃO =
var listaDeConvidados = ["Kelwin", "Thaís", "Paulinha"];
var listaDeBanidos = new Array("Fábio", "Dudu", "Vic");

//INSERÇÃO
console.log("Lista inicial");
console.log(listaDeConvidados);

listaDeConvidados.push("Maria");
console.log("Adicionei a Maria");
console.log(listaDeConvidados);

listaDeConvidados.push("José");
console.log("Adicionei o José");
console.log(listaDeConvidados);

listaDeConvidados.push("Pedro", "Thiago", "João");
console.log("Adicionei o Pedro, o Thiago e o João");
console.log(listaDeConvidados);

listaDeConvidados.push("Marta");
console.log("Adicionei a Marta");
console.log(listaDeConvidados);

// // //REMOÇÃO
console.log("Agora preciso retirar os 3 ultimos convidados");
var listaDeDesconvidados = [
  listaDeConvidados.pop(),
  listaDeConvidados.pop(),
  listaDeConvidados.pop(),
];

// console.log("Lista de convidados atualizada");
// console.log(listaDeConvidados);
// console.log("Lista de pessoas que foram desconvidadas");
// console.log(listaDeDesconvidados);

//ACESSO AOS ELEMENTOS DO ARRAY
console.log(listaDeConvidados[0]);
console.log(listaDeConvidados[1]);
console.log(listaDeConvidados[2]);
console.log(listaDeConvidados[3]);
console.log(listaDeConvidados[4]);
console.log(listaDeConvidados[5]);

mostraListaNaTela("Lista De Convidados", listaDeConvidados);
// // mostraListaNaTela("Lista De Desconvidados", listaDeDesconvidados);
// // mostraListaNaTela("Lista De Banidos", listaDeBanidos);

function mostraListaNaTela(nomeDaLista, lista) {
  var i = 0;
  // document.write(`<h1>${nomeDaLista}</h1>`);
  var frase = "Estou com fome"; // length === 14
  // E-s-t-o-u- -c-o-m- -f- o-  m- e
  // 0-1-2-3-4-5-6-7-8-9-10-11-12-13

  while (index < frase.length) {
    document.write(`<li>${frase[index]}</li>`);
    index++;
  }
}
