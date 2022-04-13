//--------------------ALERT---------------------------
//Exibe um caixa de texto no navegador
var nome = prompt("Digite seu nome");
alert(`Salve ${nome}
Qual é a boa?
`);

//________________________________________________________________________________________________________________________

//----------------TEMPLATE STRING---------------------
//Permite escrever variaveis dentro de uma string sem precisar concatenar
//Para isso é necessário abrir crases e quando for inserir uma váriavel utilize ${}(ostentação bigodinho)
function saudacao(nome) {
  console.log(`Salve ${nome}`);
}
saudacao("Bruna"); //SAÍDA: 'Salve Bruna'

//________________________________________________________________________________________________________________________

//------------------OPERADOR PONTO----------------------
/* Com o operador ponto podemos acessar métodos/funções de uma string */

//________________________________________________________________________________________________________________________

//--------------------REPLACE---------------------------

/*Replace é o método utilidado para substituir parte de uma string, porem ele não altera a string utilizada como base, ele retornauma nova string com o valor modificado */

//Para utilizar o replace você deve:

//1 - Encontrar ou definir a string que será utilizada como base
var curso = "Resilia WebDev"; //Essa será a string base

// 2 - Criar uma variavel que vai receber o retorno do replace

// a variavel 'cursoDados' neste caso é quem recebe o retorno do replace

// 3 - usar o operador ponto na variavel base para acessar a função/metodo replace

// como a nossa variavel base é a variavel curso fica assim: curso.replace()

// 4 - Passar o valor que vai ser substituido da string e o novo valor como parametros para o replace

// neste exemplo vamos substituir a palavra 'WebDev' que já existe na string curso, pela palavra 'Dados'
var cursoDados = curso.replace("WebDev", "Dados");

// A substituição ficará salva na variavel cursoDados, então para vê-la bastar dar um console.log(cursoDados)
console.log(cursoDados); // SAÍDA: 'Resilia Dados'

//________________________________________________________________________________________________________________________

//------------------UPPER CASE-----------------
/* O método toUpperCase() deixa a string com todas as letras em maiusculo*/
var estudante = "josé";
estudante.toUpperCase(); // Saida: JOSÉ

//------------------Lower CASE-----------------
/* O método toLowerCase() deixa a string com todas as letras em minusculo*/
var estudante = "MARIA";
estudante.toLowerCase(); // Saida: maria

//EXEMPLO PRATICO DO USO DO toLowerCaser() e/ou toUpperCase()

/* Validar uma resposta da pessoa usuária, a resposta precisa ser 'a' (minusculo)
  mas preciso garantir que mesmo que a pessoa usuaria digite 'A' (maiusculo) a resposta tambem estara correta.

  Para que isso aconteça, recebemos a resposta que chega como o parametro da função e fazemos uma verificação
   
  passamos o toLowerCase() na condição pois caso a pessoa tenha digitado uma letra em maiuscula ela será transformada em minuscula, e se a letra digitada for 'A', com o toLowerCase() essa resposta se transforma em 'a', tornando a condição verdadeira.
*/
function verificaResposta(resposta) {
  if (resposta.toLowerCase() === "a") {
    console.log("Ta certo");
  } else {
    console.log("ta errado");
  }
}
verificaResposta("A"); // SAÍDA: "Ta certo"
verificaResposta("b"); // SAÍDA: "Ta errado"
verificaResposta("a"); // SAÍDA: "Ta certo"

//________________________________________________________________________________________________________________________

//----------------------LENGTH-----------------------
/*Length é o tributo(caracteristica) de uma string, esse atributo mostra a quantidade de caracteres uma string possui.
Langth considera tudo o que estiver entre aspas, letras, números, caracteres especiais e o espaço.
*/
var nomeCompleto = "José Rodrigues da Silva";
nomeCompleto.length; // SAÍDA: 23

//----------------APLICAÇÃO DO LENGTH-----------------
/* As vezes precisamos criar senhas com um número minimo de caracteres.
  Para fazer a validação o length é utilizado

  Neste exemplo precisamos que o tamanho da senha seja maior ou igual 8
*/
function verificaTamanhoMinimoDeSenha(senha) {
  if (senha.length >= 8) {
    console.log("Senha válida");
  } else {
    console.log("A senha precisa ter no minimo 8 caracteres");
  }
}

verificaTamanhoMinimoDeSenha("123456"); //SAÍDA: 'A senha precisa ter no minimo 8 caracteres'
verificaTamanhoMinimoDeSenha("12345678"); //SAÍDA: 'Senha válida'

//________________________________________________________________________________________________________________________

//---------------ACESSO DIRETO AOS CARACTERES DA STRING------------
/*Sabemos que uma string é uma cadeia de caracteres e cada caracter tem uma posição na string.
  As posições começam a partir de 0
  Espaço tambem é considerado um caracter

  Vamos ver o numero de cada posição da string 'Resilia T17'

  OBS: PARA ESTE EXEMPLO NÃO VAMOS CONTAR O - (HIFEN) COMO CARACTER, ELE SERÁ UTILIZADO APENAS PARA SEPARAR OS CARACTERES

  STRING:   R-e-s-i-l-i-a- -T-1-7
  POSIÇÕES: 0-1-2-3-4-5-6-7-8-9-10

  Agora que sabemos o numero de cada caracter, podemos acessar cada um deles individualmente.
  Para acessar usamos a variavel em que a string está armazenada e em colchetes passamos o numero da posição que queremos ver

*/
var nomeDoCurso = "Resilia T17";
nomeDoCurso[0]; // SAÍDA: R
nomeDoCurso[5]; // SAÍDA: i
nomeDoCurso[8]; // SAÍDA: T
nomeDoCurso[10]; // SAÍDA: 7

//________________________________________________________________________________________________________________________

//----------------------indexOf------------------------
/*indexOf é o método que retorna a posição de um carctere dentro de uma string
  Caso ele encontre o caractere que você passou como parametro ele retorna a posição do caractere
  Caso ele NÃO encontre o caractere ele retorna -1
  
  Para utilizar o indexOf, usamos a variavel em que a string está armazenada . (ponto) indexOf() passando o caractere que
  deseja buscar como parametro
*/

var senha = "senhaSecreta2";

/* Quero saber se na string senha possui o caractere '!' (exclamação)  
  para isso vamos usar o indexOf passando '!' como parametro
*/

senha.indexOf("!"); // Como na string 'senhaSecreta2' não exite p caracter '!' (exclamação) a sáida será -1

// Agora vou alterar o conteúdo da variavel senha

senha = "senhaSecreta!123";

//vamos verificar se existe o caracter '!' (exclamação)
senha.indexOf("!"); // Agora a string possui o caracter buscado, então a saida será a posição dele 12

//________________________________________________________________________________________________________________________

//-------------APLICAÇÃO DO INDEXOF------------------------
/*Quero saber se o email recebido como parametro é valido
  Para fazer a verificação, vou buscar o caractere '@' (arroba) dentroda variavel email
  Como o indexOf retorna -1 quando não encontra um caractere a minha condição será
  se a resposta do indexOf('@') for maior que -1, então é porque no email existe o '@', sendo assim o email é valido,
  caso a resposta do indexOf('@') seja -1,quer dizer que não existe '@' na variavel email 
*/

function validaEmail(email) {
  if (email.indexOf("@") < -1) {
    document.write(`<h1>Email valido: ${email}</h1>`);
  } else {
    document.write(`<h1>Email invalido: ${email}</h1>`);
  }
}

validaEmail("resilia.t71.com"); //SAÍDA: Email invalido: resilia.t71.com
validaEmail("resilia.t71@GMAIL.com"); //SAÍDA: Email valido: resilia.t71@GMAIL.com
