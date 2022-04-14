/*
Crie uma função chamada listaDecrescente. Sua função deve:
Receber um número positivo
Retornar uma string de números, em ordem decrescente, que vai do argumento fornecido a zero
Utilize “\n” na separação dos números para pular linhas
Crie uma função chamada fizz. Sua função deve:
Receber um número positivo
Retornar uma string de números, em ordem crescente, na qual os números que são múltiplos de 3 estão substituídos por fizz
Teste tanto a função listaDecrescente quanto fizz, com diferentes argumentos, utilizando document.write e prompt
 */

function listaDecrescente() {
  while (true) {
    console.log("While rodando");

    var numeroPositivo = prompt("Digite um numero positivo");

    if (numeroPositivo > 0) {
      var respostaDecrescente = "";

      while (numeroPositivo > 0) {
        respostaDecrescente = respostaDecrescente + `${numeroPositivo} <br>`;
        numeroPositivo--;
      }

      document.write(respostaDecrescente);
      console.log("Resposta certa");
      break;
    }

    alert("Numero invalido");
    console.log("Resposta errada");
  }
}

console.log("Saiu do while");
