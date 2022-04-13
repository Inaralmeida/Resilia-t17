//Recebendo informações
var idade = prompt("Qual é a idade");
var qtdGasolina = prompt("Quanto de gasolina tem no tanque?");
var kmPorLitro = prompt("Quantos km teu carro faz com 1 litro");

//chamando as funções
console.log(previsaoRodagem(qtdGasolina, kmPorLitro));
dirigirEBeber(idade);

//Criação das funções
function dirigirEBeber(idade) {
  if (idade < 18) {
    console.log("pode dirigir e beber");
  } else {
    console.log("não pode dirigir nem beber");
  }
}

function previsaoRodagem(qdtGasolina, kmPorLitro) {
  return qdtGasolina * kmPorLitro;
}
