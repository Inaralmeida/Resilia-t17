var nome;

function perguntarNome() {
  nome = prompt("Qual é o seu nome?");
}

function dizerOi() {
  alert(`OI ${nome}`);
}

function verificaResposta(respostaCerta, msgRespostaErrada) {
  var resposta = prompt("Digite sua resposta");
  if (resposta.toLowerCase() === respostaCerta) {
    alert("Você acertou");
  } else {
    alert(msgRespostaErrada);
  }
}
