function perguntarNome() {
  //Encontrar o input e salvar o seu valor em uma variavel
  var valorInput = document.querySelector(".nome").value;
  //chamar a função dizerOi passando o nome como parametro
  dizerOi(valorInput);
}

function dizerOi(nome) {
  //Encontrar o elemento a onde ficará a tag com o texto
  var paiDoTexto = document.querySelector("#paiDosTextos");
  //criar a tag
  var tagH1 = document.createElement("h1");

  //adicionar o texto a tag
  tagH1.innerText = nome;
  //fazer com que a tag criada se torne filha do elemento selecionado
  paiDoTexto.append(tagH1);

  var textoQualquer = document.querySelector("#textoQualquer");
  textoQualquer.innerText = "Meu texto maroto";
}

function exibirLista() {
  var lista = document.querySelector("#lista");
  lista.innerHTML = `
    <ul>
      <li> Item 1 </li>
      <li> Item 2 </li>
      <li> Item 3 </li>
    </ul>
  `;
}
