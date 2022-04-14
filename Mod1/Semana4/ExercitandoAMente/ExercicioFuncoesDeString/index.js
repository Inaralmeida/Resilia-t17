/*
Crie uma função chamada validaEmail. Sua função deve:
Receber uma string
Retornar “true” caso seja um e-mail válido (inicialmente, basta verificar a utilização de ‘@’)
Retornar “false” caso contrário
Solicite o e-mail do usuário utilizando o prompt
Crie uma função chamada ExibeResultadoValidacao. Sua função deve:
Receber o resultado da validação do email
Exibir, utilizando document.write, “email validado” caso seja um endereço de e-mail valido
Exibir, utilizando document.write, “email fornecido INVALIDO” caso contrário
Teste as possíveis saídas com diferentes valores de entrada

*/

/*
  Passo 1 - Criar a função validaEmail
  Passo 2 - A função precisa ter o parametro que é uma string (Parametro deve ser um Email)
  Passo 3 - Utilizar o if else para verificar o email
  passo 4 - usar o indexOf para saber se tem ou não o @
  passo 5- Se tiver retornar 'TRUE', se não, retornar 'FALSE'
*/

/*
  EMAIL:   resilia123. co m
  posicao: 0123456789101112
*/

var email = prompt("Qual é o seu email?"); // resilia@resilia

var respostaValidacao = validaEmail(email);
console.log(respostaValidacao);
ExibeResultadoValidacao(respostaValidacao);

function validaEmail(email) {
  var posicao = email.indexOf("@");
  if (posicao > -1) {
    return true;
  } else {
    return false;
  }
}

function ExibeResultadoValidacao(resultado) {
  if (resultado) {
    document.write("email validado");
  } else {
    document.write("email fornecido INVALIDO");
  }
}
